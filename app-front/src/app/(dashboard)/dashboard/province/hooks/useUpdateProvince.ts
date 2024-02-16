import { useMutation } from "react-query";
import { IUpdateProvince } from "@/type/province";
import { createProvinceApi } from "../api/createProvince";
import { updateProvinceApi } from "../api/updateProvince";

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
