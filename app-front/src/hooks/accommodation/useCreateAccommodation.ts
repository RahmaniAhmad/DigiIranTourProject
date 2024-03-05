import { useMutation } from "react-query";
import { createAccommodationApi } from "../../apis/accommodation/createAccommodation";
import { Accommodation } from "@/models/accommodation/accommodation";
import { AccommodationViewModel } from "@/models/accommodation/accommodationViewModel";

interface UseCreateAccommodationProps {
  onSuccess?: () => void;
}
export function useCreateAccommodation({
  onSuccess,
}: UseCreateAccommodationProps) {
  const createAccommodation = useMutation(
    async (data: AccommodationViewModel) => {
      return await createAccommodationApi(data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    createAccommodation,
  };
}
