import { getMyAccommodationApi } from "@/apis/queries/accommodation/getMyAccommodation";
import { useQuery } from "react-query";

export function useMyAccommodation(id: number) {
  const {
    error,
    isLoading,
    data: accommodation,
  } = useQuery(
    ["myAccommodation", id],
    async () => await getMyAccommodationApi(id)
  );

  return {
    accommodation,
    isLoading,
  };
}
