import axios from "axios";

export const callDeleteProvinceApi = async (id: number) => {
  const response = await axios.delete(
    `http://localhost:3001/api/province/${id}`
  );
  return response.data;
};
