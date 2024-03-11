import { useState } from "react";
import { useQuery } from "react-query";
import { getAccommodationsByTypeApi } from "@/apis/accommodation/getAccommodationsByType";

export function useAccommodationsByType(type: string) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, refetch } = useQuery(
    ["accomodations", currentPage, type],
    () => getAccommodationsByTypeApi(currentPage, type)
  );

  const accommodations = data ? data.accommodations : [];
  const rowsCount = data ? data.rowsCount : 0;

  return {
    accommodations,
    rowsCount,
    refetch,
    currentPage,
    setCurrentPage,
    isLoading,
  };
}
