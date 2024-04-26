"use client";

import AccommodationItem from "@/components/shared/accommodationItem";
import { useAccommodationsByType } from "@/hooks/accommodation/useAccommodationsByType";

interface PageProps {
  params: {
    accommodation: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { accommodations } = useAccommodationsByType(params.accommodation);

  return (
    <div className="my-8">
      {accommodations.map((accommodation: any) => {
        return (
          <AccommodationItem
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            provinceName={accommodation.provinceName}
            cityName={accommodation.cityName}
            bedroomsCount={accommodation.bedroomsCount}
            bedsCount={accommodation.bedsCount}
            capacity={accommodation.capacity}
            imageSrc={`https://localhost:44390/uploads/${accommodation.imageName}`}
          />
        );
      })}
    </div>
  );
};

export default Page;
