import { getAccommodationRoomsApi } from "@/apis/accommodationRoom/getAccommodationRooms";
import { useQuery } from "react-query";

export function useAccommodationRooms() {
  const { data, error, isLoading, refetch } = useQuery(
    ["accomodationRooms"],
    () => getAccommodationRoomsApi()
  );

  const accommodationRooms = data ? data.data : [];
  const count = data ? data.count : 0;

  return {
    accommodationRooms,
    count,
    refetch,
    isLoading,
  };
}
