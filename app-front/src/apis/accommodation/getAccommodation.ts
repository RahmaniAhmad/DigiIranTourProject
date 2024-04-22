import axios from "axios";

export const getAccommodationApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });

  return data;
};
