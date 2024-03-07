import { useMutation } from "react-query";
import { createAccommodationApi } from "../../apis/accommodation/createAccommodation";
import { AccommodationViewModel } from "@/viewModels/accommodation/accommodationViewModel";
import { ICreateAccommodation } from "@/type/IAccommodation";

interface UseCreateAccommodationProps {
  onSuccess?: () => void;
}
export function useCreateAccommodation({
  onSuccess,
}: UseCreateAccommodationProps) {
  const createAccommodation = useMutation(
    async (data: ICreateAccommodation) => {
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
