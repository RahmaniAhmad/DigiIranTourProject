import { useMutation } from "react-query";
import { IUpdateProvince } from "@/type/province";
import { updateProvinceApi } from "@/apis/province/updateProvince";

interface UseUpdateProvinceProps {
  id: number;
  onSuccess?: () => void;
}
export function useUpdateProvince({ id, onSuccess }: UseUpdateProvinceProps) {
  const updateProvince = useMutation(
    async (data: IUpdateProvince) => {
      return await updateProvinceApi(id, data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    updateProvince,
  };
}
