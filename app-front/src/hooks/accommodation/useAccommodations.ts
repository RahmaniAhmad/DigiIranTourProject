import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getAccommodationsApi } from "../../apis/accommodation/getAccommodations";

export function useAccommodations(isPagination = true) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const { data, error, isLoading, refetch } = useQuery(
    ["accomodations", currentPage, filter, debounceFilter],
    () => getAccommodationsApi(isPagination, currentPage, debounceFilter)
  );

  const accommodations = data ? data.data : [];
  const count = data ? data.count : 0;

  return {
    accommodations,
    count,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
