import { ICreateProvince } from "@/type/province";
import axios from "axios";

export const createProvinceApi = async (data: ICreateProvince) => {
  const response = await axios.post("http://localhost:3001/api/province", data);
  return response.data;
};
