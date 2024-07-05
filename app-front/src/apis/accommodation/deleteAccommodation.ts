import axios from "axios";

export const deleteAccommodationApi = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/${id}`
  );
  return response.data;
};
