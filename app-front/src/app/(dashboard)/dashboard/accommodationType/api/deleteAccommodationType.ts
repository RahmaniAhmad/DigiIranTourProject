import axios from "axios";

export const deleteAccommodationTypeApi = async (id: number) => {
  const response = await axios.delete(
    `http://localhost:3001/api/accommodationType/${id}`
  );
  return response.data;
};
