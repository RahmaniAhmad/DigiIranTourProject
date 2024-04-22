import { useMutation } from "react-query";
import { deleteAccommodationTypeApi } from "../../apis/accommodationType/deleteAccommodationType";

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
