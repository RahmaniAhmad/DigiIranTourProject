import { getProvinces } from "@/apis/queries/province/getProvinces";
import { useQuery } from "react-query";

export function useProvinces() {
  const { data, error, isLoading, refetch } = useQuery(["provinces"], () =>
    getProvinces()
  );
  const provinces = data ? data.data : [];
  const count = data ? data.count : 0;

  return {
    provinces,
    count,
    refetch,
    isLoading,
  };
}
