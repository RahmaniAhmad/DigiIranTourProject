import { ICreateCity } from "@/type/city";
import axios from "axios";

export const updateCityApi = async (id: number, data: ICreateCity) => {
  const response = await axios.put(
    `http://localhost:3001/api/city/${id}`,
    data
  );
  return response.data;
};
