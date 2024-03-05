import axios from "axios";

const mapToViewModel = (data: Accommodation): AccommodationListViewModel => {
  return new AccommodationListViewModel(
    data.id,
    data.title,
    data.accommodationType,
    data.city
  );
};

export const getCitiesApi = async (page: number = 1, filter?: string) => {
  const api = filter
    ? `http://localhost:3001/api/accommodation?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/accommodation?page=${page}`;

  const response = await axios.get(api);
  const data = response.data.data || [];
  const rowsCount = response.data.rowsCount || 0;

  const viewModel: AccommodationListViewModel[] = data.map(mapToViewModel);

  return { cities: viewModel, rowsCount };
};
