import axios from "axios";

export const getAccommodationTypes = async (
  page: number = 1,
  filter?: string
) => {
  const api = filter
    ? `http://localhost:3001/api/accommodationType?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/accommodationType?page=${page}`;

  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
