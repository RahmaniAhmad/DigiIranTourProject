import { useMutation } from "react-query";
import { ICreateCity } from "@/type/city";
import { createCityApi } from "../api/createCity";

interface UseCreateCityProps {
  onSuccess?: () => void;
}
export function useCreateCity({ onSuccess }: UseCreateCityProps) {
  const createCity = useMutation(
    async (data: ICreateCity) => {
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
