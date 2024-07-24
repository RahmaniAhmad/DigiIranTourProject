"use client";

import Table from "@/components/UI/table";
import { useProvinces } from "@/hooks/queries";

export default function ProvinceList() {
  const { provinces, count, refetch, isLoading } = useProvinces();

  return (
    <>
      {provinces && (
        <Table
          loading={isLoading}
          heads={["استان"]}
          data={provinces}
          actions={{
            showEdit: false,
            showDelete: false,
            baseActionURL: "/dashboard/province",
          }}
        ></Table>
      )}
    </>
  );
}
