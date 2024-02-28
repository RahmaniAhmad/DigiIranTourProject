import { useMutation } from "react-query";
import { IUpdateAccommodation } from "@/type/accommodation";
import { updateAccommodationApi } from "../api/updateAccommodation";

interface UseUpdateAccommodationProps {
  id: number;
  onSuccess?: () => void;
}
export function useUpdateAccommodation({
  id,
  onSuccess,
}: UseUpdateAccommodationProps) {
  const updateAccommodation = useMutation(
    async (data: IUpdateAccommodation) => {
      return await updateAccommodationApi(id, data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    updateAccommodation,
  };
}
