import { useMutation } from "react-query";
import { updateAccommodationApi } from "../../apis/accommodation/updateAccommodation";
import { AccommodationViewModel } from "@/viewModels/accommodation/accommodationViewModel";

interface UseUpdateAccommodationProps {
  onSuccess?: () => void;
}
interface IUpdateAccommodation {
  id: number;
  data: any;
}
export function useUpdateAccommodation({
  onSuccess,
}: UseUpdateAccommodationProps) {
  const updateAccommodation = useMutation(
    async ({ id, data }: IUpdateAccommodation) => {
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
