import axios from "axios";

export const getAccommodationTypes = async (
  isPagination = true,
  page: number = 1,
  filter?: string
) => {
  let api = "";
  if (isPagination) {
    api = filter
      ? `${process.env.NEXT_PUBLIC_BASE_API}/accommodationType/getallpaged?page=${page}&filter=${filter}`
      : `${process.env.NEXT_PUBLIC_BASE_API}/accommodationType/getallpaged?page=${page}`;
  } else {
    api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationType/getall`;
  }
  const data = await axios.get(api).then((response) => {
    return response.data;
  });

  return data;
};
