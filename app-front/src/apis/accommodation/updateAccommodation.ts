import axios from "axios";
import { City } from "../../models/accommodation/accommodation";
import { CityViewModel } from "@/models/accommodation/accommodationViewModel";

const mapToModel = (viewModel: CityViewModel) => {
  return {
    id: viewModel.id,
    name: viewModel.name,
    provinceId: Number(viewModel.provinceId),
  };
};

export const updateAccommodationApi = async (
  viewModel: AccommodationViewModel
) => {
  const model = mapToModel(viewModel);
  const response = await axios.put(
    `http://localhost:3001/api/accommodation/${model.id}`,
    model
  );
  return response.data;
};
