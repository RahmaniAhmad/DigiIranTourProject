import { CityViewModel } from "@/viewModels/city/cityViewModel";
import axios from "axios";

export const createCityApi = async (viewModel: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/city`,
    viewModel
  );
  return response.data;
};
