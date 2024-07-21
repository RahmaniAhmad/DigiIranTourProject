import { useQuery } from "react-query";
import { getAccommodationApi } from "../../apis/accommodation/getAccommodation";

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
