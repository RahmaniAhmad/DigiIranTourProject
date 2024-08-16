import axios from "axios";

export const getAccommodationsByTypeApi = async (
  page: number = 1,
  typeId?: string
) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getbytypeId?typeId=${typeId}`;

  const data = await axios.get(api).then((response) => {
    return response.data;
  });

  return data;
};
