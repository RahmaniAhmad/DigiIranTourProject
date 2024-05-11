import axios from "axios";

export const getMyAccommodationApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getmyaccommodation/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });

  return data;
};

export const getAccommodationApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getaccommodation/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });

  return data;
};
