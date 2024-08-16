import { getAccommodationRoomsApi } from "@/apis/queries/accommodationRoom/getAccommodationRooms";
import { useQuery } from "react-query";

export function useAccommodationRooms(accommodationId: number) {
  const { data, error, isLoading, refetch } = useQuery(
    ["accomodationRooms"],
    () => getAccommodationRoomsApi(accommodationId)
  );

  const accommodationRooms = data ? data.data : [];

  return {
    accommodationRooms,
    refetch,
    isLoading,
  };
}
