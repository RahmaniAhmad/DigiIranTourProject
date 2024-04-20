import { ICreateAccommodationType } from "@/type/IAccommodationType";
import axios from "axios";

export const updateAccommodationTypeApi = async (
  id: number,
  data: ICreateAccommodationType
) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodationType/${id}`,
    data
  );
  return response.data;
};
