import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getAccommodations } from "../api/getAccommodations";
import { getAccommodation } from "../api/getAccommodation";

export function useAccommodations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const {
    data: accommodations,
    error,
    isLoading,
    refetch,
  } = useQuery(["accommodations", currentPage, debounceFilter], () =>
    getAccommodations(currentPage, debounceFilter)
  );

  return {
    accommodations,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
