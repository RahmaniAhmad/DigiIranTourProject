import { useMutation } from "react-query";
import { signInApi, verificationCodeApi } from "@/apis/user/auth";

type SignInProps = {
  mobile: string;
  verificationCode: string;
};
export function useSignIn() {
  const verificationCode = useMutation(
    async (mobile: string) => {
      return await verificationCodeApi(mobile);
    },
    {
      onSuccess: () => {},
      onError: (error) => {},
    }
  );

  const signIn = useMutation(
    async ({ mobile, verificationCode }: SignInProps) => {
      return await signInApi(mobile, verificationCode);
    },
    {
      onSuccess: () => {},
      onError: (error) => {},
    }
  );

  return {
    verificationCode,
    signIn,
  };
}
