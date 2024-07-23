import axios from "axios";

export const sendVerificationCodeApi = async (mobile: string) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/auth/sendVerificationCode`,
    {
      mobile: mobile,
    }
  );
  return response.data;
};

export const loginApi = async (mobile: string, verificationCode: string) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
    {
      mobile: mobile,
      verificationCode: verificationCode,
    }
  );

  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);

  return response.data;
};
