"use client";

import AccommodationRoomItem from "@/components/shared/accommodationRoomItem";
import { useAccommodation, useAccommodationRoom } from "@/hooks/queries";
import { I18nProvider } from "@react-aria/i18n";

import {
  BreadcrumbItem,
  Breadcrumbs,
  DateRangePicker,
} from "@nextui-org/react";

interface PageProps {
  params: {
    id: string;
    roomId: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { accommodation } = useAccommodation(Number.parseInt(params.id));

  const { accommodationRoom, isLoading } = useAccommodationRoom(
    Number.parseInt(params.roomId)
  );

  if (!accommodationRoom) return <></>;
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
        <BreadcrumbItem href="../">{accommodation?.title}</BreadcrumbItem>
        <BreadcrumbItem>{accommodationRoom.title}</BreadcrumbItem>
      </Breadcrumbs>

      <div className="col-span-2 flex flex-1 flex-col">
        <span className="font-bold flex items-center">
          <AccommodationRoomItem
            accommodationId={params.id}
            data={accommodationRoom}
          />
          <I18nProvider locale="fa-IR">
            <DateRangePicker
              label="بازه اقامت"
              visibleMonths={2}
              onChange={() => {}}
            />
          </I18nProvider>
        </span>
      </div>
    </>
  );
};

export default Page;
