import axios from "axios";
import { CityViewModel } from "@/models/city/cityViewModel";

const mapToModel = (viewModel: CityViewModel) => {
  return {
    id: viewModel.id,
    name: viewModel.name,
    provinceId: Number(viewModel.provinceId),
  };
};

export const createCityApi = async (viewModel: CityViewModel) => {
  const model = mapToModel(viewModel);
  const response = await axios.post("http://localhost:3001/api/city", model);
  return response.data;
};
