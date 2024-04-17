import axios from "axios";

export const getProvince = async (id: number) => {
  const api = `httpS://localhost:44390/api/province/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
