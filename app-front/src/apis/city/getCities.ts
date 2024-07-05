import { CityTableViewModel } from "@/viewModels/city/cityTableViewModel";
import axios from "axios";

const mapToViewModel = (model: Array<any>): CityTableViewModel[] => {
  const viewModel: CityTableViewModel[] = [];
  model.map((item) => {
    viewModel.push({
      id: item.id,
      name: item.name,
      provinceName: item.province.name,
    });
  });
  return viewModel;
};

export const getCitiesApi = async () => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/city`;

  const data = await axios.get(api).then((response) => {
    return {
      data: mapToViewModel(response.data.data),
    };
  });
  return data;
};
