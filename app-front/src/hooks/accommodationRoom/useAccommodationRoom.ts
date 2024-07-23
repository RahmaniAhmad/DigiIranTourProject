import { useQuery } from "react-query";
import { getAccommodationRoomsApi } from "@/apis/accommodationRoom/getAccommodationRooms";

export function useAccommodation(id: number) {
  const {
    error,
    isLoading,
    data: accommodation,
  } = useQuery(
    ["accommodationRoom", id],
    async () => await getAccommodationRoomsApi(id)
  );

  return {
    accommodation,
    isLoading,
  };
}
