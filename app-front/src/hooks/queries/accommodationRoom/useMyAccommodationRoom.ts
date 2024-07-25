import { useQuery } from "react-query";
import { getMyAccommodationRoomApi } from "@/apis/accommodationRoom/getMyAccommodationRoom";

export function useMyAccommodationRoom(id: number) {
  const {
    error,
    isLoading,
    data: accommodationRoom,
  } = useQuery(
    ["accommodationRoom", id],
    async () => await getMyAccommodationRoomApi(id)
  );

  return {
    accommodationRoom,
    isLoading,
  };
}
