import axios from "axios";

const mapToModel = (viewModel: any) => {
  return {
    id: viewModel.id,
    name: viewModel.name,
    provinceId: Number(viewModel.provinceId),
  };
};
export const updateCityApi = async (id: number, viewModel: any) => {
  const response = await axios.put(
    `http://localhost:3001/api/city/${id}`,
    mapToModel(viewModel)
  );
  return response.data;
};
