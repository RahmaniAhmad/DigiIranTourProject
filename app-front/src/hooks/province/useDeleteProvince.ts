import { deleteProvinceApi } from "@/apis/province/deleteProvince";
import { useMutation } from "react-query";

interface useDeleteProvinceProps {
  onSuccess?: () => void;
}
export function useDeleteProvince({ onSuccess }: useDeleteProvinceProps) {
  const deleteProvince = useMutation(
    async (id: number) => {
      return await deleteProvinceApi(id);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    deleteProvince,
  };
}
