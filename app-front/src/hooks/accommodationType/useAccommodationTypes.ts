import { getAccommodationTypes } from "@/apis/api/getAccommodationTypes";
import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";

export function useAccommodationTypes(isPagination = true) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const {
    data: accommodationTypes,
    error,
    isLoading,
    refetch,
  } = useQuery(["accommodationTypes", currentPage, debounceFilter], () =>
    getAccommodationTypes(isPagination, currentPage, debounceFilter)
  );

  return {
    accommodationTypes,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
