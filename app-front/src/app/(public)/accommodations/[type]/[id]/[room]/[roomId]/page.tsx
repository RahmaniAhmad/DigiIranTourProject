"use client";

import AccommodationRoomItem from "@/components/shared/accommodationRoomItem";
import { useAccommodationRoom } from "@/hooks/queries";
import Image from "next/image";
import { useMemo } from "react";
import { FaShareAlt } from "react-icons/fa";

interface PageProps {
  params: {
    id: string;
    roomId: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { accommodationRoom, isLoading } = useAccommodationRoom(
    Number.parseInt(params.roomId)
  );

  if (!accommodationRoom) return <></>;
  return (
    <>
      <div className="col-span-2 flex flex-1 flex-col">
        <span className="font-bold flex items-center">
          {accommodationRoom.title}
        </span>
      </div>
    </>
  );
};

export default Page;
