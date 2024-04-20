import { ICreateAccommodationType } from "@/type/IAccommodationType";
import axios from "axios";

export const updateAccommodationTypeApi = async (
  id: number,
  data: ICreateAccommodationType
) => {
  const response = await axios.put(
    `http://localhost:3001/api/accommodationType/${id}`,
    data
  );
  return response.data;
};
