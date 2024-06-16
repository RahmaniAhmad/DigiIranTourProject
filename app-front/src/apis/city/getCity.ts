import axios from "axios";

export const getCityApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/city/${id}`;

  const response = await axios.get(api);
  return response.data;
};
