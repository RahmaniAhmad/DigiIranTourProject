import { getAccommodationApi } from "@/apis/accommodation/getAccommodation";
import { useQuery } from "react-query";

export function useAccommodation(id: number) {
  const {
    error,
    isLoading,
    data: accommodation,
  } = useQuery(
    ["accommodation", id],
    async () => await getAccommodationApi(id)
  );

  return {
    accommodation,
    isLoading,
  };
}
