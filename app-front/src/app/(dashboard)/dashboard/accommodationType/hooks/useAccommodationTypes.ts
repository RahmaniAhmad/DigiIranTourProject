import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getAccommodationTypes } from "../api/getAccommodationTypes";
import { getAccommodationType } from "../api/getAccommodationType";

export function useAccommodationTypes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const {
    data: accommodationTypes,
    error,
    isLoading,
    refetch,
  } = useQuery(["accommodationTypes", currentPage, debounceFilter], () =>
    getAccommodationTypes(currentPage, debounceFilter)
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
