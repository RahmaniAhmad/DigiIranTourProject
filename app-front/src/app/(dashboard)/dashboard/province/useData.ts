import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getProvinces } from "./api/getProvinces";
import { callDeleteProvinceApi } from "./api/deleteProvince";
import { getProvince } from "./api/getProvince";

export function useData(id?: number) {
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

  const { data: province } = useQuery(["province", id], () => getProvince(id));

  const deleteProvince = useMutation(
    (id: number) => {
      return callDeleteProvinceApi(id);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  return {
    provinces,
    province,
    refetch,
    deleteProvince,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
