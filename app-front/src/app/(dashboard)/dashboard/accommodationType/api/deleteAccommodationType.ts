import axios from "axios";

export const deleteAccommodationTypeApi = async (id: number) => {
  const response = await axios.delete(
    `http://localhost:3001/api/accommodation-type/${id}`
  );
  return response.data;
};
