import axios from "axios";

export const createAccommodationApi = async (data: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodation`,
    data
  );

  return response.data;
};
