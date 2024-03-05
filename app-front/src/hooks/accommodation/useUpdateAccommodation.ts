import { useMutation } from "react-query";
import { updateAccommodationApi } from "../../apis/accommodation/updateAccommodation";
import { Accommodation } from "@/models/accommodation/accommodation";
import { AccommodationViewModel } from "@/models/accommodation/accommodationViewModel";

interface UseUpdateAccommodationProps {
  onSuccess?: () => void;
}
export function useUpdateAccommodation({
  onSuccess,
}: UseUpdateAccommodationProps) {
  const updateAccommodation = useMutation(
    async (data: AccommodationViewModel) => {
      return await updateAccommodationApi(data);
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
