import { useMutation } from "react-query";
import { createCityApi } from "../../apis/city/createCity";
import { City } from "@/models/city/city";

interface UseCreateCityProps {
  onSuccess?: () => void;
}
export function useCreateCity({ onSuccess }: UseCreateCityProps) {
  const createCity = useMutation(
    async (data: City) => {
      return await createCityApi(data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    createCity,
  };
}
