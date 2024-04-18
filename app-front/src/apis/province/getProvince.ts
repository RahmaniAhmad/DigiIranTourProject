import axios from "axios";

export const getProvinceApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/province/${id}`;

  const response = await axios.get(api);
  const data = response.data;

  return data;
};
