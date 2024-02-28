import axios from "axios";

export const getAccommodations = async (page: number = 1, filter?: string) => {
  const api = filter
    ? `http://localhost:3001/api/accommodation?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/accommodation?page=${page}`;

  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
