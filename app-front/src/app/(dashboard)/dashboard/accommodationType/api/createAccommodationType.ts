import { ICreateAccommodationType } from "@/type/accommodationType";
import axios from "axios";

export const createAccommodationTypeApi = async (
  data: ICreateAccommodationType
) => {
  const response = await axios.post(
    "http://localhost:3001/api/accommodation-type",
    data
  );
  return response.data;
};
