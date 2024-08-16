import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface AccommodationItemProps {
  id?: number;
  title?: string;
  star?: string;
  province?: string;
  city?: string;
  imageSrc?: string;
  bedroomsCount?: string;
  price?: string;
}
const AccommodationItem = ({
  id,
  title,
  star,
  province,
  city,
  imageSrc,
  bedroomsCount,
  price,
}: AccommodationItemProps) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 mb-12 pb-2 border-b-1">
      <div className="md:col-span-1 h-128 w-128 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imageSrc ?? ""}
          alt={title ?? "image"}
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
            <h3 className="font-medium">{title}</h3>
            <p className="mt-1 text-sm">{star} ستاره</p>
            <p className="text-sm text-gray-500">تعداد اتاق: {bedroomsCount}</p>
            <p className="text-gray-500">
              {province} , {city}
            </p>
          </div>
          <div className="grid gap-2">
            <p>قیمت برای یک شب {price}</p>
            <Button
              href={`/accommodations/hotel/${id}`}
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
