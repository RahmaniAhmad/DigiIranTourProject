import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getCities } from "../api/getCities";

export function useCities() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const {
    data: cities,
    error,
    isLoading,
    refetch,
  } = useQuery(["cities", currentPage, debounceFilter], () =>
    getCities(currentPage, debounceFilter)
  );

  return {
    cities,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
