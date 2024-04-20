import { ICreateAccommodationType } from "@/type/IAccommodationType";
import axios from "axios";

export const createAccommodationTypeApi = async (
  data: ICreateAccommodationType
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodationType`,
    data
  );
  return response.data;
};
