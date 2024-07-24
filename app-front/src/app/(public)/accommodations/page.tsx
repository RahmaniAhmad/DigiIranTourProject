"use client";

import AccommodationItem from "@/components/shared/accommodationItem";
import { useAccommodations } from "@/hooks/queries";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
  const { accommodations } = useAccommodations();

  return (
    <div className="">
      <ButtonGroup className="my-2 flex justify-center">
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
