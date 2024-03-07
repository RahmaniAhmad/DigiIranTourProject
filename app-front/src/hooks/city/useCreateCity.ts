import { useMutation } from "react-query";
import { createCityApi } from "../../apis/city/createCity";

interface UseCreateCityProps {
  onSuccess?: () => void;
}
export function useCreateCity({ onSuccess }: UseCreateCityProps) {
  const createCity = useMutation(
    async (data: any) => {
      return await createCityApi(data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
      onError: (error) => {
        debugger;
      },
    }
  );

  return {
    createCity,
  };
}
