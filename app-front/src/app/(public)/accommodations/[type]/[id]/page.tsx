"use client";

import AccommodationRoomItem from "@/components/shared/accommodationRoomItem";
import AccommodationItemSkeleton from "@/components/shared/skeleton/accommodationItemSkeleton";
import { useAccommodation } from "@/hooks/queries";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";
import { useMemo } from "react";
import { FaStar, FaShareAlt } from "react-icons/fa";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { accommodation, isLoading } = useAccommodation(
    Number.parseInt(params.id)
  );

  const imageSrc = useMemo(() => {
    if (accommodation)
      return `https://localhost:44390/uploads/${accommodation.imageUrl}`;
  }, [accommodation]);

  if (isLoading) {
    return (
      <>
        <AccommodationItemSkeleton />
      </>
    );
  }

  if (!accommodation) return <></>;
  return (
    <>
      <Breadcrumbs
        className="my-2"
        separator="/"
        itemClasses={{
          separator: "px-2",
        }}
      >
        <BreadcrumbItem href="/accommodations">اقامتگاه</BreadcrumbItem>
        <BreadcrumbItem href="../">{accommodation.title}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 mb-12 pb-2">
        <div className="md:col-span-1 h-128 w-128 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <Image
            src={imageSrc ?? ""}
            alt={accommodation.title ?? "image"}
            loader={({ src, width, quality }) => {
              const url = new URL(imageSrc ?? "");
              url.searchParams.append("src", src);
              url.searchParams.append("w", width + "");
              url.searchParams.append("q", quality + "");
              return url.toString();
            }}
            width={128}
            height={128}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1  my-4">
        <div className="col-span-1 space-y-2">
          <div className="font-bold">{accommodation.title}</div>
          <div>
            <span className="font-normal flex items-center">
              <FaStar className="inline ml-2" />
              {accommodation.star} ستاره {accommodation.city},{" "}
              {accommodation.address}
            </span>
          </div>
        </div>
        <div className="col-span-1 font-medium flex justify-end items-baseline">
          <FaShareAlt className="inline ml-2" />
          <a href="#">اشتراک گذاری اقامتگاه</a>
        </div>
      </div>
      <hr />

      <div className="grid md:grid-cols-1">
        {accommodation.rooms.map((m) => (
          <AccommodationRoomItem
            key={m.id}
            accommodationId={params.id}
            data={m}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
