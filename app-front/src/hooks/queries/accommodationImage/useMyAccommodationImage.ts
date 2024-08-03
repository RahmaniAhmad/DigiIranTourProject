import { useQuery } from "react-query";
import { getMyAccommodationImageApi } from "@/apis/accommodationImage/getMyAccommodationImage";

export function useMyAccommodationImage(id: number) {
  const {
    error,
    isLoading,
    data: accommodationImage,
  } = useQuery(
    ["accommodationImage", id],
    async () => await getMyAccommodationImageApi(id)
  );

  return {
    accommodationImage,
    isLoading,
  };
}
