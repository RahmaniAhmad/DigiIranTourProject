import axios from "axios";

export const getProvinces = async (page: number = 1, filter?: string) => {
  const api = filter
    ? `http://localhost:3001/api/province?page=${page}&filter=${filter}`
    : `http://localhost:3001/api/province?page=${page}`;

  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
