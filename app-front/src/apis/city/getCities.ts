import { CityTableViewModel } from "@/viewModels/city/cityTableViewModel";
import axios from "axios";

export const getCitiesApi = async (page: number = 1, filter?: string) => {
  const api = filter
    ? `http://localhost:3001/api/city?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/city?page=${page}`;

  const response = await axios.get(api);
  const data: CityTableViewModel[] = response.data.data || [];
  const rowsCount = response.data.rowsCount || 0;

  return { cities: data, rowsCount };
};
