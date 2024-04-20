import axios from "axios";

export const getAccommodationType = async (id: number) => {
  const api = `http://localhost:3001/api/accommodationType/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
