import axios from "axios";

export const deleteProvinceApi = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_API}/province/${id}`
  );
  return response.data;
};
