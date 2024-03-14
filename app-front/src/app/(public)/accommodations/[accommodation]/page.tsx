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
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-300">
          {accommodations.map((accommodation) => {
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
                imageSrc={`http://localhost:3001/uploads/${accommodation.imageName}`}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Page;
