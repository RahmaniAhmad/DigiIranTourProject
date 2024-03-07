import { AccommodationTableViewModel } from "@/viewModels/accommodation/accommodationTableViewModel";
import axios from "axios";

export const getAccommodationsApi = async (
  page: number = 1,
  filter?: string
) => {
  const api = filter
    ? `http://localhost:3001/api/accommodation?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/accommodation?page=${page}`;

  const response = await axios.get(api);
  const data: AccommodationTableViewModel[] = response.data.data || [];
  const rowsCount = response.data.rowsCount || 0;

  return { accommodations: data, rowsCount };
};
