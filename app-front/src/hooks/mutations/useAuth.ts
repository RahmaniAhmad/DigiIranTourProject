import { useMutation } from "react-query";
import { loginApi, sendVerificationCodeApi } from "@/apis/auth/authApis";
import { useRouter } from "next/navigation";

type LoginProps = {
  mobile: string;
  verificationCode: string;
};

export function useAuth() {
  const router = useRouter();

  const sendVerificationCode = useMutation(
    async (mobile: string) => {
      return await sendVerificationCodeApi(mobile)
        .then((response) => {})
        .then(() => {});
    },
    {
      onSuccess: () => {},
      onError: (error) => {},
    }
  );

  const login = useMutation(
    async ({ mobile, verificationCode }: LoginProps) => {
      return await loginApi(mobile, verificationCode)
        .then((response) => {
          if (response.accessToken != null) {
            router.push("/dashboard");
          }
        })
        .then(() => {});
    },
    {
      onSuccess: () => {},
      onError: (error) => {},
    }
  );

  return {
    sendVerificationCode,
    login,
  };
}
