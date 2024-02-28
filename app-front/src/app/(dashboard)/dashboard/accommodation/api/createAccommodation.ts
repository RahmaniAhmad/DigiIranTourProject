import { ICreateAccommodation } from "@/type/accommodation";
import axios from "axios";

export const createAccommodationApi = async (data: ICreateAccommodation) => {
  const response = await axios.post(
    "http://localhost:3001/api/accommodation",
    data
  );
  return response.data;
};
