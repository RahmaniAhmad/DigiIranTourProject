import { CityViewModel } from "@/viewModels/city/cityViewModel";
import axios from "axios";

export const getCityApi = async (id: number) => {
  const api = `http://localhost:3001/api/city/${id}`;

  const response = await axios.get(api);
  const data = response.data;
  const viewModel = new CityViewModel(
    data.id,
    data.name,
    data.province.id,
    data.province.name
  );
  return viewModel;
};
