import { AccommodationTableViewModel } from "@/viewModels/accommodation/accommodationTableViewModel";
import axios from "axios";

export const getAccommodationsByTypeApi = async (
  page: number = 1,
  type?: string
) => {
  const api = `http://localhost:3001/api/accommodation/type/${type}`;

  const response = await axios.get(api);
  const data: AccommodationTableViewModel[] = response.data.data || [];

  const rowsCount = response.data.rowsCount || 0;

  return { accommodations: data, rowsCount };
};
