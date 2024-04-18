import { useMutation } from "react-query";
import { createProvinceApi } from "@/apis/province/createProvince";

interface UseCreateProvinceProps {
  onSuccess?: () => void;
}
export function useCreateProvince({ onSuccess }: UseCreateProvinceProps) {
  const createProvince = useMutation(
    async (data: any) => {
      return await createProvinceApi(data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
      onError: (error) => {},
    }
  );

  return {
    createProvince,
  };
}
