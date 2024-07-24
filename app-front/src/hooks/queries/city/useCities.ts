import { useQuery } from "react-query";
import { getCitiesApi } from "../../../apis/city/getCities";

export function useCities() {
  const { data, error, isLoading, refetch } = useQuery(["cities"], () =>
    getCitiesApi()
  );
  const cities = data ? data.data : [];

  return {
    cities,
    refetch,
    isLoading,
  };
}
