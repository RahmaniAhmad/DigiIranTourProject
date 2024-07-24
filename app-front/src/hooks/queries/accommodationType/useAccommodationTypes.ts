import { getAccommodationTypes } from "@/apis/accommodationType/getAccommodationTypes";
import { useQuery } from "react-query";

export function useAccommodationTypes() {
  const { data, error, isLoading, refetch } = useQuery(
    ["accommodationTypes"],
    () => getAccommodationTypes()
  );

  const accommodationTypes = data ? data.data : [];

  return {
    accommodationTypes,
    refetch,
    isLoading,
  };
}
