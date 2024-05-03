import { CityViewModel } from "@/viewModels/city/cityViewModel";
import axios from "axios";

export const signInApi = async () => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/user/signin`,
    {
      mobile: "",
      code: "",
    }
  );

  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);

  return response.data;
};
