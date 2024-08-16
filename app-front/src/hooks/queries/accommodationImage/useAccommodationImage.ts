import { useQuery } from "react-query";
import { getAccommodationImageApi } from "@/apis/queries/accommodationImage/getAccommodationImage";

export function useAccommodationImage(id: number) {
  const {
    error,
    isLoading,
    data: accommodation,
  } = useQuery(
    ["accommodationImage", id],
    async () => await getAccommodationImageApi(id)
  );

  return {
    accommodation,
    isLoading,
  };
}
