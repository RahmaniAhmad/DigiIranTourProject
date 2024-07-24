"use client";
import Table from "@/components/UI/table";
import { useCities } from "@/hooks/queries";

export default function CityList() {
  const { cities, count, refetch, isLoading } = useCities();

  return (
    <>
      {cities && (
        <Table
          loading={isLoading}
          heads={["استان", "شهر"]}
          data={cities}
          actions={{
            showEdit: false,
            showDelete: false,
            baseActionURL: "/dashboard/city",
          }}
        ></Table>
      )}
    </>
  );
}
