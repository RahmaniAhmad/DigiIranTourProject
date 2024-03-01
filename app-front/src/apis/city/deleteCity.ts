import axios from "axios";

export const deleteCityApi = async (id: number) => {
  const response = await axios.delete(`http://localhost:3001/api/city/${id}`);
  return response.data;
};
