import axios from "axios";

export const deleteAccommodationApi = async (id: number) => {
  const response = await axios.delete(
    `http://localhost:3001/api/accommodation/${id}`
  );
  return response.data;
};
