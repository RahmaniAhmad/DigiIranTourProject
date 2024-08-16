import { getAccommodationImagesApi } from "@/apis/queries/accommodationImage/getAccommodationImages";
import { useQuery } from "react-query";

export function useAccommodationImages(accommodationId: number) {
  const { data, error, isLoading, refetch } = useQuery(
    ["accomodationImages"],
    () => getAccommodationImagesApi(accommodationId)
  );

  const accommodationImages = data ? data.data : [];

  return {
    accommodationImages,
    refetch,
    isLoading,
  };
}
