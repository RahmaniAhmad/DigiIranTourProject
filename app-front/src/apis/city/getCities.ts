import axios from "axios";
import { City } from "../../models/city/city";
import { CityViewModel } from "../../models/city/cityViewModel";
import { CityListViewModel } from "@/models/city/cityListViewModel";

const mapToViewModel = (city: City): CityListViewModel => {
  return new CityListViewModel(city.id, city.province, city.name);
};

export const getCitiesApi = async (page: number = 1, filter?: string) => {
  const api = filter
    ? `http://localhost:3001/api/city?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/city?page=${page}`;

  const response = await axios.get(api);
  const data = response.data.data || [];
  const rowsCount = response.data.rowsCount || 0;

  const citiesViewModel: CityListViewModel[] = data.map(mapToViewModel);

  return { cities: citiesViewModel, rowsCount };
};
