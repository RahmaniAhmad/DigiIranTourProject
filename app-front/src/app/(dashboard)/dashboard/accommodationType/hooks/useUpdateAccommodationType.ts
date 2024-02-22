import { useMutation } from "react-query";
import { IUpdateAccommodationType } from "@/type/accommodationType";
import { createAccommodationTypeApi } from "../api/createAccommodationType";
import { updateAccommodationTypeApi } from "../api/updateAccommodationType";

interface UseUpdateAccommodationTypeProps {
  id: number;
  onSuccess?: () => void;
}
export function useUpdateAccommodationType({
  id,
  onSuccess,
}: UseUpdateAccommodationTypeProps) {
  const updateAccommodationType = useMutation(
    async (data: IUpdateAccommodationType) => {
      return await updateAccommodationTypeApi(id, data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    updateAccommodationType,
  };
}
