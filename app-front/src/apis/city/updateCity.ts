import axios from "axios";
import { City } from "../../models/city/city";

export const updateCityApi = async (id: number, data: City) => {
  const response = await axios.put(
    `http://localhost:3001/api/city/${id}`,
    data
  );
  return response.data;
};
