import { PublicAccommodationRoomModel } from "@/interfaces";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  accommodationId: string;
  data: PublicAccommodationRoomModel;
}
const AccommodationRoomItem = ({ accommodationId, data }: Props) => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 mb-12 pb-2 border-b-1">
      <div className="md:col-span-2 mr-4 flex flex-1 flex-col py-4">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="grid gap-2">
            <p className="font-medium">{data.title}</p>
            <p className="mt-1 text-sm">{data.bedsCount} تعداد تخت</p>
            <p className="text-sm text-gray-500">تعداد اتاق: {data.capacity}</p>
            <p className="text-gray-500">{data.description}</p>
          </div>
          <div className="grid gap-2">
            <p>قیمت برای یک شب {data.price}</p>
            <Button
              href={`/accommodations/hotel/${accommodationId}/room/${data.id}`}
              as={Link}
              color="primary"
              variant="solid"
            >
              رزرو
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationRoomItem;
