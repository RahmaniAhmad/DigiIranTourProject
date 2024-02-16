import { useMutation } from "react-query";
import { ICreateProvince } from "@/type/province";
import { createProvinceApi } from "../api/createProvince";

interface UseCreateProvinceProps {
  onSuccess?: () => void;
}
export function useCreateProvince({ onSuccess }: UseCreateProvinceProps) {
  const createProvince = useMutation(
    async (data: ICreateProvince) => {
      return await createProvinceApi(data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    createProvince,
  };
}
