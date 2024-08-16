import { getProvinceApi } from "@/apis/queries/province/getProvince";
import { useQuery } from "react-query";

export function useProvince(id: number) {
  const {
    error,
    isLoading,
    data: province,
  } = useQuery(["province", id], () => getProvinceApi(id));

  return {
    province,
    isLoading,
  };
}
