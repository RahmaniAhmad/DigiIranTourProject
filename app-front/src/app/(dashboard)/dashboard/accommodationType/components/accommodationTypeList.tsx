"use client";

import Table from "@/components/UI/table";
import { useAccommodationTypes } from "../../../../../hooks/accommodationType/useAccommodationTypes";

export default function AccommodationTypeList() {
  const { accommodationTypes, count, refetch, isLoading } =
    useAccommodationTypes();

  return (
    <>
      {accommodationTypes && (
        <Table
          loading={isLoading}
          heads={["نام نوع اقامت"]}
          data={accommodationTypes}
          actions={{
            showEdit: false,
            showDelete: false,
            baseActionURL: "/dashboard/accommodationType",
          }}
        ></Table>
      )}
    </>
  );
}
