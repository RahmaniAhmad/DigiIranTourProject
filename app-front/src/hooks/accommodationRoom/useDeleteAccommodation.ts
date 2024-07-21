import { deleteAccommodationApi } from "@/apis/accommodation/deleteAccommodation";
import { useMutation } from "react-query";

interface useDeleteAccommodationProps {
  onSuccess?: () => void;
}
export function useDeleteAccommodation({
  onSuccess,
}: useDeleteAccommodationProps) {
  const deleteAccommodation = useMutation(
    async (id: number) => {
      return await deleteAccommodationApi(id);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    deleteAccommodation,
  };
}
