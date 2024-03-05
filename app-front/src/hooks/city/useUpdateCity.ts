import { useMutation } from "react-query";
import { updateCityApi } from "../../apis/city/updateCity";

interface UseUpdateCityProps {
  onSuccess?: () => void;
}
interface IUpdateCity {
  id: number;
  data: any;
}
export function useUpdateCity({ onSuccess }: UseUpdateCityProps) {
  const updateCity = useMutation(
    async ({ id, data }: IUpdateCity) => {
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
