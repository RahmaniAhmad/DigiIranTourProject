import axios from "axios";
import { City } from "../../models/city/city";

export const createCityApi = async (data: City) => {
  const response = await axios.post("http://localhost:3001/api/city", data);
  return response.data;
};
