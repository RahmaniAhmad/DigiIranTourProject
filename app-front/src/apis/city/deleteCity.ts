import axios from "axios";

export const deleteCityApi = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_API}/city/${id}`
  );
  return response.data;
};
