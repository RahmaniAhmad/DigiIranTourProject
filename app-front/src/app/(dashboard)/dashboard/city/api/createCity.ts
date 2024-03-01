import { ICreateCity } from "@/type/city";
import axios from "axios";

export const createCityApi = async (data: ICreateCity) => {
  const response = await axios.post("http://localhost:3001/api/city", data);
  return response.data;
};
