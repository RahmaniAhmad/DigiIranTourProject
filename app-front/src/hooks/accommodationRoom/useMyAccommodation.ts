import { useQuery } from "react-query";
import { getMyAccommodationApi } from "../../apis/accommodation/getAccommodation";

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
