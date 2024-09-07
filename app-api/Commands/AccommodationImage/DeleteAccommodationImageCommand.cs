using app_api.Contracts;
using app_api.Services;
using app_api.Settings;
using MediatR;
using Microsoft.Extensions.Options;

namespace app_api.Commands
{
    public class DeleteAccommodationImageCommand
    {
        public class DeleteAccommodationImageRequest : IRequest<bool>
        {
            public long ImageId { get; set; }
        }

        public class Handler : IRequestHandler<DeleteAccommodationImageRequest, bool>
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

            public async Task<bool> Handle(DeleteAccommodationImageRequest command, CancellationToken cancellationToken)
            {
                var accommodationImage = await unitOfWork.AccommodationImages.GetByIdAsync(command.ImageId, cancellationToken);
                if (accommodationImage == null)
                {
                    throw new KeyNotFoundException("Accommodation image not found.");
                }

                var uploadBasePath = fileUploadSettings.Value.UploadBasePath;

                await imageStorageService.DeleteImageAsync(accommodationImage.Url, uploadBasePath);

                unitOfWork.AccommodationImages.Delete(accommodationImage, cancellationToken);
                await unitOfWork.CompleteAsync(cancellationToken);

                return true;
            }
        }
    }
}
