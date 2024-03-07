import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getAccommodationsApi } from "../../apis/accommodation/getAccommodations";

export function useAccommodations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const { data, error, isLoading, refetch } = useQuery(
    ["accomodations", currentPage, filter, debounceFilter],
    () => getAccommodationsApi(currentPage, debounceFilter)
  );
  const accommodations = data ? data.accommodations : [];
  const rowsCount = data ? data.rowsCount : 0;

  return {
    accommodations,
    rowsCount,
    refetch,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
