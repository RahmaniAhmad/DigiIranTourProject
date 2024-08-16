"use client";

import AccommodationItem from "@/components/shared/accommodationItem";
import { useAccommodations } from "@/hooks/queries";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
  const { accommodations } = useAccommodations();

  return (
    <div className="w-full">
      <ButtonGroup className="mt-4 mb-8 flex justify-center">
        <Button>
          <Link href="accommodations/hotel">هتل</Link>
        </Button>
        <Button>
          <Link href="accommodations/apartment">هتل آپارتمان</Link>
        </Button>
        <Button>
          <Link href="accommodations/ecotourism">بومگردی</Link>
        </Button>
      </ButtonGroup>
      {accommodations.map((accommodation: any) => {
        return (
          <AccommodationItem
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            star={accommodation.star}
            province={accommodation.province}
            city={accommodation.city}
            bedroomsCount={accommodation.bedroomsCount}
            price={accommodation.price}
            imageSrc={`https://localhost:44390/uploads/${accommodation.imageUrl}`}
          />
        );
      })}
    </div>
  );
};

export default Page;
