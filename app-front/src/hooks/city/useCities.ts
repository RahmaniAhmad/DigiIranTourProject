import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getCitiesApi } from "../../apis/city/getCities";

export function useCities() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const { data, error, isLoading, refetch } = useQuery(
    ["cities", currentPage, filter, debounceFilter],
    () => getCitiesApi(currentPage, debounceFilter)
  );
  const cities = data ? data.cities : [];
  const rowsCount = data ? data.rowsCount : 0;

  return {
    cities,
    rowsCount,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
