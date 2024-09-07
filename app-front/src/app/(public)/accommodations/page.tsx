"use client";

import AccommodationItem from "@/components/shared/accommodationItem";
import AccommodationTypes from "@/components/shared/accommodationTypes";
import AccommodationsSkeleton from "@/components/shared/skeleton/accommodationsSkeleton";
import { useAccommodations } from "@/hooks/queries";
import { Card, CardBody } from "@nextui-org/react";

const Page = () => {
  const { accommodations, isLoading } = useAccommodations();

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
    <div className="w-full">
      <AccommodationTypes />
      {accommodations.map((accommodation: any) => {
        return (
          <Card key={accommodation.id} radius="sm" className="bg-gray-50 mb-4">
            <CardBody className="text-right">
              <AccommodationItem
                data={accommodation}
                imageSrc={`https://localhost:44390/uploads/${accommodation.imageUrl}`}
              />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Page;
