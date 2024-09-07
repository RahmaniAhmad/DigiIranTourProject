namespace app_api.Services
{
    public class ImageStorageService
    {
        public async Task<string> SaveImageAsync(IFormFile image, string uploadBasePath)
        {
            if (image != null && image.Length > 0)
            {
                var uniqueFileName = $"{Guid.NewGuid().ToString()}_{image.FileName}";
                DateTime now = DateTime.Now;
                var uploadsFolder = Path.Combine(uploadBasePath, now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"));
                Directory.CreateDirectory(uploadsFolder);
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(stream);
                }

                return Path.Combine(now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"), uniqueFileName);
            }

            throw new InvalidOperationException("Invalid image file");
        }
        public Task DeleteImageAsync(string imageUrl, string uploadBasePath)
        {
            var oldFilePath = Path.Combine(uploadBasePath, imageUrl);
            if (File.Exists(oldFilePath))
            {
                File.Delete(oldFilePath);
            }

            return Task.CompletedTask;
        }
    }
}
