import axios from "axios";

export const getCitiesApi = async (page: number = 1, filter?: string) => {
  const api = filter
    ? `${process.env.NEXT_PUBLIC_BASE_API}/city?page=${page}&filter=${filter}`
    : `${process.env.NEXT_PUBLIC_BASE_API}/city?page=${page}`;

  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
