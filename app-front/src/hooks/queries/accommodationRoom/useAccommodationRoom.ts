import { useQuery } from "react-query";
import { getAccommodationRoomApi } from "@/apis/queries/accommodationRoom/getAccommodationRoom";

export function useAccommodationRoom(id: number) {
  const {
    error,
    isLoading,
    data: accommodationRoom,
  } = useQuery(
    ["accommodationRoom", id],
    async () => await getAccommodationRoomApi(id)
  );

  return {
    accommodationRoom,
    isLoading,
  };
}
