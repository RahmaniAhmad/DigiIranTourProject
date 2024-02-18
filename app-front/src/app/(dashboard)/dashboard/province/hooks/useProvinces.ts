import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getProvinces } from "../api/getProvinces";
import { getProvince } from "../api/getProvince";

export function useProvinces() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const {
    data: provinces,
    error,
    isLoading,
    refetch,
  } = useQuery(["provinces", currentPage, debounceFilter], () =>
    getProvinces(currentPage, debounceFilter)
  );

  return {
    provinces,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
