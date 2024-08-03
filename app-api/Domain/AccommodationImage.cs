﻿using app_api.Domain.Base;
using System;

namespace app_api.Domain
{
    public class AccommodationImage : Entity
    {
        public AccommodationImage(Accommodation accommodation, string url, string? title)
        {
            Accommodation = accommodation ?? throw new ArgumentNullException(nameof(accommodation));
            AccommodationId = accommodation.Id;
            Url = url ?? throw new ArgumentNullException(nameof(url));
            Title = title;
        }

        private AccommodationImage() { }

        public long AccommodationId { get; private set; }
        public Accommodation Accommodation { get; private set; }
        public string Url { get; private set; }
        public string? Title { get; private set; }

        public void UpdateDetails(string url, string? title)
        {
            this.Url = url;
            this.Title = title;
        }
    }
}
