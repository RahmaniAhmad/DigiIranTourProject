import { useQuery } from "react-query";
import { getCitiesApi } from "../../apis/city/getCities";

export function useCities() {
  const { data, error, isLoading, refetch } = useQuery(["cities"], () =>
    getCitiesApi()
  );
  const cities = data ? data.data : [];
  const count = data ? data.count : 0;

  return {
    cities,
    count,
    refetch,
    isLoading,
  };
}
