import axios from "axios";

export const deleteProvinceApi = async (id: number) => {
  const response = await axios.delete(
    `http://localhost:3001/api/province/${id}`
  );
  return response.data;
};
