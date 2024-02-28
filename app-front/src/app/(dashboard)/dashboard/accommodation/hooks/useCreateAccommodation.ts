import { useMutation } from "react-query";
import { ICreateAccommodation } from "@/type/accommodation";
import { createAccommodationApi } from "../api/createAccommodation";

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
