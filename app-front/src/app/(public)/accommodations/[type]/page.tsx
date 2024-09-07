"use client";

import AccommodationItem from "@/components/shared/accommodationItem";
import AccommodationTypes from "@/components/shared/accommodationTypes";
import AccommodationsSkeleton from "@/components/shared/skeleton/accommodationsSkeleton";
import { useAccommodationsByType } from "@/hooks/queries";

interface PageProps {
  params: {
    type: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { accommodations, isLoading } = useAccommodationsByType(params.type);

  if (isLoading) {
    return (
      <>
        <AccommodationsSkeleton />
        <AccommodationsSkeleton />
        <AccommodationsSkeleton />
      </>
    );
  }

  return (
    <div>
      <AccommodationTypes selectedType={params.type} />
      {accommodations.length == 0 && (
        <div className="text-center">
          <h1>موردی یافت نشد!</h1>
        </div>
      )}
      {accommodations.map((accommodation: any) => {
        return (
          <AccommodationItem
            key={accommodation.id}
            data={accommodation}
            imageSrc={`https://localhost:44390/uploads/${accommodation.imageUrl}`}
          />
        );
      })}
    </div>
  );
};

export default Page;
