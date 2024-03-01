import axios from "axios";
import { City } from "../../models/city/city";
import { CityViewModel } from "../../models/city/cityViewModel";

const mapToViewModel = (city: City): CityViewModel => {
  return new CityViewModel(city.id, city.province, city.name);
};

export const getCities = async (page: number = 1, filter?: string) => {
  const api = filter
    ? `http://localhost:3001/api/city?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/city?page=${page}`;

  const response = await axios.get(api);
  const data = response.data.data || [];
  const rowsCount = response.data.rowsCount || 0;

  const citiesViewModel: CityViewModel[] = data.map(mapToViewModel);

  return { cities: citiesViewModel, rowsCount };
};
