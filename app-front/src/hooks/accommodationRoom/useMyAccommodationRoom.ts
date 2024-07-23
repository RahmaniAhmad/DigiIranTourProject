import { useQuery } from "react-query";
import { getMyAccommodationRoomApi } from "@/apis/accommodationRoom/getMyAccommodationRoom";

export function useMyAccommodation(id: number) {
  const {
    error,
    isLoading,
    data: accommodation,
  } = useQuery(
    ["myAccommodation", id],
    async () => await getMyAccommodationRoomApi(id)
  );

  return {
    accommodation,
    isLoading,
  };
}
