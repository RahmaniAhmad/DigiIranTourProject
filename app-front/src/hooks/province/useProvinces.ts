import { getProvinces } from "@/apis/province/getProvinces";
import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";

export function useProvinces(isPagination = true) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const { data, error, isLoading, refetch } = useQuery(
    ["provinces", currentPage, debounceFilter],
    () => getProvinces(isPagination, currentPage, debounceFilter)
  );
  const provinces = data ? data.data : [];
  const count = data ? data.count : 0;

  return {
    provinces,
    count,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
