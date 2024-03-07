import { AccommodationViewModel } from "@/viewModels/accommodation/accommodationViewModel";
import axios from "axios";

export const getAccommodationApi = async (id: number) => {
  const api = `http://localhost:3001/api/accommodation/${id}`;
  const response = await axios.get(api);
  const data = response.data;
  const viewModel = new AccommodationViewModel(
    data.id,
    data.title,
    data.accommodationType.id,
    data.accommodationType.name
  );

  return viewModel;
};
