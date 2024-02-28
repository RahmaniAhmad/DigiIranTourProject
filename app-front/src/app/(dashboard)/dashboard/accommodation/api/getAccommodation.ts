import axios from "axios";

export const getAccommodation = async (id: number) => {
  const api = `http://localhost:3001/api/accommodation/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  return data;
};
