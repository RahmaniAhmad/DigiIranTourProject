import { AccommodationViewModel } from "@/viewModels/accommodation/accommodationViewModel";
import { CityViewModel } from "@/viewModels/city/cityViewModel";
import axios from "axios";

export const createCityApi = async (viewModel: CityViewModel) => {
  const response = await axios.post(
    "http://localhost:3001/api/city",
    viewModel
  );
  return response.data;
};
