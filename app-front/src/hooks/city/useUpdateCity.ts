import { useMutation } from "react-query";
import { updateCityApi } from "../../apis/city/updateCity";
import { City } from "@/models/city/city";
import { CityViewModel } from "@/models/city/cityViewModel";

interface UseUpdateCityProps {
  onSuccess?: () => void;
}
export function useUpdateCity({ onSuccess }: UseUpdateCityProps) {
  const updateCity = useMutation(
    async (data: CityViewModel) => {
      return await updateCityApi(data);
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
