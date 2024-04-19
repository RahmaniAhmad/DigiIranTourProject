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
    `${process.env.NEXT_PUBLIC_BASE_API}/city/${id}`,
    mapToModel(viewModel)
  );
  return response.data;
};
