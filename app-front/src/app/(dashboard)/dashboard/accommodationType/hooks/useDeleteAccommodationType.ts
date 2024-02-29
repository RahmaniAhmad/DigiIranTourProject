import { useMutation } from "react-query";
import { deleteAccommodationTypeApi } from "../api/deleteAccommodationType";

interface useDeleteAccommodationTypeProps {
  onSuccess?: () => void;
}
export function useDeleteAccommodationType({
  onSuccess,
}: useDeleteAccommodationTypeProps) {
  const deleteAccommodationType = useMutation(
    async (id: number) => {
      return await deleteAccommodationTypeApi(id);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    deleteAccommodationType,
  };
}
