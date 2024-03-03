import axios from "axios";
import { City } from "../../models/city/city";
import { CityViewModel } from "@/models/city/cityViewModel";

const mapToModel = (viewModel: CityViewModel) => {
  return {
    id: viewModel.id,
    name: viewModel.name,
    provinceId: Number(viewModel.provinceId),
  };
};

export const updateCityApi = async (viewModel: CityViewModel) => {
  const model = mapToModel(viewModel);
  const response = await axios.put(
    `http://localhost:3001/api/city/${model.id}`,
    model
  );
  return response.data;
};
