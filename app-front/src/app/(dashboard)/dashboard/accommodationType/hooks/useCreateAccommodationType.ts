import { useMutation } from "react-query";
import { ICreateAccommodationType } from "@/type/accommodationType";
import { createAccommodationTypeApi } from "../api/createAccommodationType";

interface UseCreateAccommodationTypeProps {
  onSuccess?: () => void;
}
export function useCreateAccommodationType({
  onSuccess,
}: UseCreateAccommodationTypeProps) {
  const createAccommodationType = useMutation(
    async (data: ICreateAccommodationType) => {
      return await createAccommodationTypeApi(data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    createAccommodationType,
  };
}
