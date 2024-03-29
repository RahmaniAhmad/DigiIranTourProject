import { useQuery } from "react-query";
import { getProvince } from "../api/getProvince";

export function useProvince(id: number) {
  const {
    error,
    isLoading,
    data: province,
  } = useQuery(["province", id], () => getProvince(id));

  return {
    province,
    isLoading,
  };
}
