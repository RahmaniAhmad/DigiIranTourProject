import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getProvinces } from "../api/getProvinces";
import { deleteProvinceApi } from "../api/deleteProvince";
import { getProvince } from "../api/getProvince";

export function useProvince(id: number) {
  const {
    error,
    isLoading,
    data: province,
  } = useQuery(["province", id], () => getProvince(id));

  const deleteProvince = useMutation((id: number) => {
    return deleteProvinceApi(id);
  });

  return {
    province,
    deleteProvince,
    isLoading,
  };
}
