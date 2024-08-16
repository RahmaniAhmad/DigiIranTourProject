import axios from "axios";

export const deleteAccommodationRoomApi = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodationRoom/${id}`
  );
  return response.data;
};
