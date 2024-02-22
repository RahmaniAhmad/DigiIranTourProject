import { useQuery } from "react-query";
import { getAccommodationType } from "../api/getAccommodationType";

export function useAccommodationType(id: number) {
  const {
    error,
    isLoading,
    data: accommodationType,
  } = useQuery(["accommodationType", id], () => getAccommodationType(id));

  return {
    accommodationType,
    isLoading,
  };
}
