import { useQuery } from "react-query";
import { getCityApi } from "../../apis/city/getCity";

export function useCity(id: number) {
  const {
    error,
    isLoading,
    data: city,
  } = useQuery(["city", id], () => getCityApi(id));

  return {
    city,
    isLoading,
  };
}
