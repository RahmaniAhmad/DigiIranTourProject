import { ICreateAccommodationType } from "@/type/accommodationType";
import axios from "axios";

export const createAccommodationTypeApi = async (
  data: ICreateAccommodationType
) => {
  debugger;
  const response = await axios.post(
    "http://localhost:3001/api/accommodationType",
    data
  );
  return response.data;
};
