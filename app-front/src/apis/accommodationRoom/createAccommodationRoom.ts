import axios from "axios";

export const createAccommodationRoomApi = async (data: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodationRoom`,
    data
  );

  return response.data;
};
