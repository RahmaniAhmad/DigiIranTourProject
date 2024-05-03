import { useMutation } from "react-query";
import { createProvinceApi } from "@/apis/province/createProvince";
import { signInApi } from "@/apis/user/signIn";

export function useSignIn() {
  const signIn = useMutation(
    async () => {
      return await signInApi();
    },
    {
      onSuccess: () => {},
      onError: (error) => {},
    }
  );

  return {
    signIn,
  };
}
