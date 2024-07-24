"use client";

import AccommodationItem from "@/components/shared/accommodationItem";
import { useAccommodationsByType } from "@/hooks/queries";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

interface PageProps {
  params: {
    type: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { accommodations } = useAccommodationsByType(params.type);

  return (
    <div>
      <ButtonGroup className="my-2 flex justify-center">
        <Button
          style={{
            backgroundColor: params.type === "hotel" ? "#aaa" : "primary",
          }}
        >
          <Link href="/accommodations/hotel">هتل</Link>
        </Button>
        <Button
          style={{
            backgroundColor: params.type === "apartment" ? "#aaa" : "primary",
          }}
        >
          <Link href="/accommodations/apartment">هتل آپارتمان</Link>
        </Button>
        <Button
          style={{
            backgroundColor: params.type === "ecotourism" ? "#aaa" : "primary",
          }}
        >
          <Link href="/accommodations/ecotourism">بومگردی</Link>
        </Button>
      </ButtonGroup>
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
            price={accommodation.price}
            imageSrc={`https://localhost:44390/uploads/${accommodation.imageName}`}
          />
        );
      })}
    </div>
  );
};

export default Page;
