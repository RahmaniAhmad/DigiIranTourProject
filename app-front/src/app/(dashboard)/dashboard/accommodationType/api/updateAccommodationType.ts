import { ICreateAccommodationType } from "@/type/accommodationType";
import axios from "axios";

export const updateAccommodationTypeApi = async (
  id: number,
  data: ICreateAccommodationType
) => {
  const response = await axios.put(
    `http://localhost:3001/api/accommodation-type/${id}`,
    data
  );
  return response.data;
};
