"use client";

import { useAccommodation } from "@/hooks/accommodation/useAccommodation";
import Image from "next/image";
import { useMemo } from "react";
import { FaShareAlt } from "react-icons/fa";

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
      return `https://localhost:44390/uploads/${accommodation.imageName}`;
  }, [accommodation]);

  if (!accommodation) return <></>;
  return (
    <>
      <div className="mr-4 col-span-2 flex flex-1 flex-col py-4">
        <h2 className="font-medium flex items-center">
          <FaShareAlt />
          <a href="#">اشتراک گذاری اقامتگاه</a>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-full gap-x-6 md:gap-y-10 xl:gap-x-8">
        <div className="h-128 w-128 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
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
        <div className="mr-4 flex flex-1 flex-col py-4">
          <h2 className="font-medium">{accommodation.title}</h2>
          <p className="mt-1 text-sm text-gray-500">
            ظرفیت: {accommodation.capacity}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            تعداد تخت: {accommodation.bedsCount}
          </p>
          <p className="text-gray-500">
            {accommodation.provinceName} , {accommodation.cityName}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
