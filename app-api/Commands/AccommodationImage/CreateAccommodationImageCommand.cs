using app_api.Contracts;
using app_api.Domain;
using app_api.Services;
using app_api.Settings;
using MediatR;
using Microsoft.Extensions.Options;
using System.ComponentModel.DataAnnotations;

namespace app_api.Commands
{
    public class CreateAccommodationImageCommand
    {
        public class CreateAccommodationImageRequest : IRequest<Domain.AccommodationImage>
        {
            public long AccommodationId { get; set; }

            public string? Title { get; set; }

            public required IFormFile AccommodationImage { get; set; }
        }

        public class Handler : IRequestHandler<CreateAccommodationImageRequest, Domain.AccommodationImage>
        {
            private readonly IOptions<FileUploadSettings> fileUploadSettings;
            private readonly ImageStorageService imageStorageService;
            private readonly IUnitOfWork unitOfWork;

            public Handler(IOptions<FileUploadSettings> fileUploadSettings,ImageStorageService imageStorageService, IUnitOfWork unitOfWork)
            {
                this.fileUploadSettings = fileUploadSettings;  
                this.imageStorageService = imageStorageService;
                this.unitOfWork = unitOfWork;
            }

            public async Task<Domain.AccommodationImage> Handle(CreateAccommodationImageRequest command, CancellationToken cancellationToken)
            {
                var accommodation = await unitOfWork.Accommodations.GetByIdAsync(command.AccommodationId, cancellationToken);
                if (accommodation == null)
                {
                    throw new KeyNotFoundException("Accommodation not found.");
                }

                if (command.AccommodationImage == null || command.AccommodationImage.Length == 0)
                {
                    throw new ValidationException("Accommodation image is required.");
                }

                var uploadBasePath = fileUploadSettings.Value.UploadBasePath;
                var imageUrl = await imageStorageService.SaveImageAsync(command.AccommodationImage, uploadBasePath);

                var accommodationImage = new AccommodationImage(accommodation, imageUrl);

                if (command.Title != null)
                {
                    accommodationImage.UpdateOptionalDetails(command.Title);

                }

                await unitOfWork.AccommodationImages.AddAsync(accommodationImage, cancellationToken);
                await unitOfWork.CompleteAsync(cancellationToken);

                return accommodationImage;
            }
        }
    }
}
