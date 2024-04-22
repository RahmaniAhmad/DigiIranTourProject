import { getAccommodationTypes } from "@/apis/accommodationType/getAccommodationTypes";
import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";

export function useAccommodationTypes(isPagination = true) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const { data, error, isLoading, refetch } = useQuery(
    ["accommodationTypes", currentPage, debounceFilter],
    () => getAccommodationTypes(isPagination, currentPage, debounceFilter)
  );

  const accommodationTypes = data ? data.data : [];
  const count = data ? data.count : 0;

  return {
    accommodationTypes,
    count,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
