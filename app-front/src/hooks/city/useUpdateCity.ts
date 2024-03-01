import { useMutation } from "react-query";
import { updateCityApi } from "../../apis/city/updateCity";
import { City } from "@/models/city/city";

interface UseUpdateCityProps {
  id: number;
  onSuccess?: () => void;
}
export function useUpdateCity({ id, onSuccess }: UseUpdateCityProps) {
  const updateCity = useMutation(
    async (data: City) => {
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
