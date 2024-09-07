import { PublicAccommodationRoomModel } from "@/interfaces";
import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  accommodationId: string;
  data?: PublicAccommodationRoomModel;
}
const AccommodationRoomItem = ({ accommodationId, data }: Props) => {
  if (!data) return;
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1">
      <div className="md:col-span-2 flex flex-1 flex-col py-2">
        <Card radius="none" className="bg-gray-50">
          <CardBody className="text-right">
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div className="grid gap-2">
                <p className="font-medium">{data.title}</p>
                <p className="mt-1 text-sm">تعداد تخت: {data.bedsCount}</p>
                <p className="text-sm text-gray-500">ظرفیت: {data.capacity}</p>
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
          </CardBody>
        </Card>
      </div>
      {/* <div className="col-span-2">
        <Card radius="none" className="bg-gray-50">
          <CardBody className="text-right">
            <p>توضیحات</p>
            <p className="text-gray-500">{data.description}</p>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
};

export default AccommodationRoomItem;
