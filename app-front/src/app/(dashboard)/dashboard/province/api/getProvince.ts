import axios from "axios";

export const getProvince = async (id?: number) => {
  const api = `http://localhost:3001/api/province/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
