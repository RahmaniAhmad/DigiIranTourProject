import { useMutation } from "react-query";
import { IUpdateCity } from "@/type/city";
import { createCityApi } from "../api/createCity";
import { updateCityApi } from "../api/updateCity";

interface UseUpdateCityProps {
  id: number;
  onSuccess?: () => void;
}
export function useUpdateCity({ id, onSuccess }: UseUpdateCityProps) {
  const updateCity = useMutation(
    async (data: IUpdateCity) => {
      return await updateCityApi(id, data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    updateCity,
  };
}
