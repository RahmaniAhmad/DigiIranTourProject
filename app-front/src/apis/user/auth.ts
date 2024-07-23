import axios from "axios";

export const verificationCodeApi = async (mobile: string) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/user/VerificationCode`,
    {
      mobile: mobile,
    }
  );
  return response.data;
};

// export const signInApi = async (mobile: string, verificationCode: string) => {
//   const response = await axios.post(
//     `${process.env.NEXT_PUBLIC_BASE_API}/user/signin`,
//     {
//       mobile: mobile,
//       verificationCode: verificationCode,
//     }
//   );

//   localStorage.setItem("accessToken", response.data.accessToken);
//   localStorage.setItem("refreshToken", response.data.refreshToken);

//   return response.data;
// };
