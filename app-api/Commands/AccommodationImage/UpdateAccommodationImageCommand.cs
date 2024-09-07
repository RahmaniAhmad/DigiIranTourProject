using app_api.Contracts;
using app_api.Services;
using app_api.Settings;
using MediatR;
using Microsoft.Extensions.Options;

namespace app_api.Commands
{
    public class UpdateAccommodationImageCommand
    {
        public class UpdateAccommodationImageRequest : IRequest<Domain.AccommodationImage>
        {
            public long ImageId { get; set; }

            public string? Title { get; set; }

            public IFormFile? AccommodationImage { get; set; }
        }

        public class Handler : IRequestHandler<UpdateAccommodationImageRequest, Domain.AccommodationImage>
        {
            private readonly IOptions<FileUploadSettings> fileUploadSettings;
            private readonly ImageStorageService imageStorageService;
            private readonly IUnitOfWork unitOfWork;

            public Handler(IOptions<FileUploadSettings> fileUploadSettings, ImageStorageService imageStorageService, IUnitOfWork unitOfWork)
            {
                this.fileUploadSettings = fileUploadSettings;
                this.imageStorageService = imageStorageService;
                this.unitOfWork = unitOfWork;
            }

            public async Task<Domain.AccommodationImage> Handle(UpdateAccommodationImageRequest command, CancellationToken cancellationToken)
            {
                var accommodationImage = await unitOfWork.AccommodationImages.GetByIdAsync(command.ImageId, cancellationToken);
                if (accommodationImage == null)
                {
                    throw new KeyNotFoundException("Accommodation image not found.");
                }

                var uploadBasePath = fileUploadSettings.Value.UploadBasePath;

                if (command.AccommodationImage != null && command.AccommodationImage.Length > 0)
                {
                    // Delete the old image
                    await imageStorageService.DeleteImageAsync(accommodationImage.Url, uploadBasePath);

                    // Save the new image
                    var newImageUrl = await imageStorageService.SaveImageAsync(command.AccommodationImage, uploadBasePath);
                    accommodationImage.UpdateRquiredDetails(newImageUrl);
                }

                if (!string.IsNullOrEmpty(command.Title))
                {
                    accommodationImage.UpdateOptionalDetails(command.Title);
                }

                await unitOfWork.CompleteAsync(cancellationToken);

                return accommodationImage;
            }
        }
    }
}
