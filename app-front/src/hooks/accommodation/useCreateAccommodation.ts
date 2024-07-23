import { useMutation } from "react-query";
import { createAccommodationApi } from "../../apis/accommodation/createAccommodation";

interface UseCreateAccommodationProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
export function useCreateAccommodation({
  onSuccess,
  onError,
}: UseCreateAccommodationProps) {
  const createAccommodation = useMutation(
    async (data: any) => {
      return await createAccommodationApi(data);
    },
    {
      onSuccess: () => {
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: (error) => {
        if (onError) {
          onError(error);
        }
      },
    }
  );

  return {
    createAccommodation,
  };
}
