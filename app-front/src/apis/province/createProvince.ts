import { CityViewModel } from "@/viewModels/city/cityViewModel";
import axios from "axios";

export const createProvinceApi = async (viewModel: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/province`,
    viewModel
  );
  return response.data;
};
