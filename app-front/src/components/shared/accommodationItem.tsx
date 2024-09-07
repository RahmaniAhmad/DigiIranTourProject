import { Button, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface AccommodationItemProps {
  data: {
    id?: number;
    title?: string;
    star?: string;
    province?: string;
    city?: string;
    bedroomsCount?: string;
    price?: string;
  };
  imageSrc?: string;
}
const AccommodationItem = ({ data, imageSrc }: AccommodationItemProps) => {
  if (!data) return;
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 pb-2">
      <div className="md:col-span-1 h-128 w-128 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imageSrc ?? ""}
          alt={data.title ?? "image"}
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

      <div className="md:col-span-2 mr-4 flex flex-1 flex-col py-4">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="grid gap-2">
            <h3 className="font-medium">{data.title}</h3>
            <div className="flex items-center text-sm">
              <FaStar className="inline ml-2" />
              {data.star} ستاره
            </div>

            <p className="text-gray-500">
              {data.province} , {data.city}
            </p>
          </div>
          <div className="grid gap-2">
            <p>قیمت برای یک شب {data.price}</p>
            <Button
              href={`/accommodations/hotel/${data.id}`}
              as={Link}
              color="primary"
              variant="solid"
            >
              مشاهده اتاقها و رزرو
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationItem;
