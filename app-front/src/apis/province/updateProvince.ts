import axios from "axios";

export const updateProvinceApi = async (id: number, viewModel: any) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_BASE_API}/province/${id}`,
    viewModel
  );
  return response.data;
};
