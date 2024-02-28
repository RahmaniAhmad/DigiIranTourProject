import { useQuery } from "react-query";
import { getAccommodation } from "../api/getAccommodation";

export function useAccommodation(id: number) {
  const {
    error,
    isLoading,
    data: accommodation,
  } = useQuery(["accommodation", id], () => getAccommodation(id));

  return {
    accommodation,
    isLoading,
  };
}
