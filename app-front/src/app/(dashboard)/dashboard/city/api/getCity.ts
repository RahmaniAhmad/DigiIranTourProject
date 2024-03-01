import axios from "axios";

export const getCity = async (id: number) => {
  const api = `http://localhost:3001/api/city/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
