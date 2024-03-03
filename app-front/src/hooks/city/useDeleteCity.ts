import { deleteCityApi } from "@/apis/city/deleteCity";
import { useMutation } from "react-query";

interface useDeleteCityProps {
  onSuccess?: () => void;
}
export function useDeleteCity({ onSuccess }: useDeleteCityProps) {
  const deleteCity = useMutation(
    async (id: number) => {
      return await deleteCityApi(id);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    deleteCity,
  };
}
