import { ICreateAccommodationType } from "@/type/IAccommodationType";
import axios from "axios";

export const createAccommodationTypeApi = async (
  data: ICreateAccommodationType
) => {
  const response = await axios.post(
    "http://localhost:3001/api/accommodationType",
    data
  );
  return response.data;
};
