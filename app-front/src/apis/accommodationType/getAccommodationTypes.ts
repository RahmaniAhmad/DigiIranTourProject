import axios from "axios";

export const getAccommodationTypes = async () => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationType`;

  const data = await axios.get(api).then((response) => {
    return response.data;
  });

  return data;
};
