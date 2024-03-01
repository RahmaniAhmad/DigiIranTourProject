import { useQuery } from "react-query";
import { getCity } from "../api/getCity";

export function useCity(id: number) {
  const {
    error,
    isLoading,
    data: city,
  } = useQuery(["city", id], () => getCity(id));

  return {
    city,
    isLoading,
  };
}
