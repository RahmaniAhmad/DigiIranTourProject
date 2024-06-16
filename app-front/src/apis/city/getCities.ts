import axios from "axios";

export const getCitiesApi = async () => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/city`;

  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
