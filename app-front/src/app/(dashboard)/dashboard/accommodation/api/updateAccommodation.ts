import { ICreateAccommodation } from "@/type/accommodation";
import axios from "axios";

export const updateAccommodationApi = async (
  id: number,
  data: ICreateAccommodation
) => {
  const response = await axios.put(
    `http://localhost:3001/api/accommodation/${id}`,
    data
  );
  return response.data;
};
