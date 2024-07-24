import axios from "axios";

export const getAccommodationsByTypeApi = async (
  page: number = 1,
  type?: string
) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getbytype?type=${type}`;

  const data = await axios.get(api).then((response) => {
    return response.data;
  });

  return data;
};
