import { ICreateProvince } from "@/type/province";
import axios from "axios";

export const updateProvinceApi = async (id: number, data: ICreateProvince) => {
  const response = await axios.put(
    `http://localhost:3001/api/province/${id}`,
    data
  );
  return response.data;
};
