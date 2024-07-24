import { useQuery } from "react-query";
import { getAccommodationRoomApi } from "@/apis/accommodationRoom/getAccommodationRoom";

export function useAccommodationRoom(id: number) {
  const {
    error,
    isLoading,
    data: accommodation,
  } = useQuery(
    ["accommodationRoom", id],
    async () => await getAccommodationRoomApi(id)
  );

  return {
    accommodation,
    isLoading,
  };
}
