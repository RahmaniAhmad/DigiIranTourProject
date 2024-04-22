import axios from "axios";

export const deleteAccommodationTypeApi = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodationType/${id}`
  );
  return response.data;
};
