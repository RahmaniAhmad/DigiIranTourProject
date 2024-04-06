import { AccommodationTableViewModel } from "@/viewModels/accommodation/accommodationTableViewModel";
import axios from "axios";

const mapToViewModel = (model: Array<any>): AccommodationTableViewModel[] => {
  const viewModel: AccommodationTableViewModel[] = [];
  model.map((item) => {
    viewModel.push({
      id: item.id,
      provinceName: item.provinceName,
      cityName: item.cityName,
      accommodationTypeTitle: item.accommodationTypeTitle,
      title: item.title,
      address: item.address,
      bedroomsCount: item.bedroomsCount,
      bedsCount: item.bedsCount,
      capacity: item.capacity,
      imageName: item.imageName,
    });
  });
  return viewModel;
};

export const getAccommodationsApi = async (
  page: number = 1,
  filter?: string
) => {
  const api = filter
    ? `http://localhost:3001/api/accommodation?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/accommodation?page=${page}`;

  const response = await axios.get(api);
  // const data: AccommodationTableViewModel[] = response.data.data || [];
  const data = mapToViewModel(response.data.data);
  const rowsCount = response.data.rowsCount || 0;

  return { accommodations: data, rowsCount };
};
