import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface AccommodationItemProps {
  id?: number;
  title?: string;
  provinceName?: string;
  cityName?: string;
  imageSrc?: string;
  bedroomsCount?: string;
  bedsCount?: string;
  capacity?: string;
}
const AccommodationItem = ({
  id,
  title,
  provinceName,
  cityName,
  imageSrc,
  bedroomsCount,
  bedsCount,
  capacity,
}: AccommodationItemProps) => {
  return (
    <li className="flex py-6">
      <div className="h-128 w-128 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imageSrc ?? ""}
          alt={title ?? "image"}
          width={128}
          height={128}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mr-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between mb-4 text-gray-900">
            <h3 className="font-medium">{title}</h3>
            <p>قیمت برای یک شب</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="mt-1 text-sm text-gray-500">
              تعداد اتاق: {bedroomsCount}
            </p>
            <p className="mt-1 text-sm text-gray-500">1,000,000 ریال</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            {provinceName} , {cityName}
          </p>

          <div className="flex">
            <Button
              href={`/accommodations/hotel/${id}`}
              as={Link}
              color="primary"
              variant="solid"
            >
              مشاهده و رزرو
            </Button>
          </div>
        </div>
      </div>
    </li>

    // <a href={`/accommodations/hotel/${id}`} className="group">
    // <div className="flex">
    //   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
    //     <Image
    //       width={128}
    //       height={128}
    //       src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
    //       alt={title ?? "product-image"}
    //       className="h-full w-full object-cover object-center group-hover:opacity-75"
    //     />
    //   </div>
    //   <div className="px-2">
    //     <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
    //     <p className="mt-1 text-lg font-medium text-gray-900">
    //       {provinceName},{cityName}
    //     </p>
    //   </div>
    //   <div>
    //     <Button color="primary">مشاهده و رزور</Button>
    //   </div>
    // </div>
    // </a>
  );
};

export default AccommodationItem;
