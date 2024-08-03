import axios from "axios";

export const deleteAccommodationImageApi = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodationImage/${id}`
  );
  return response.data;
};
