import axios from "axios";

export const getProvinces = async (
  isPagination = true,
  page: number = 1,
  filter?: string
) => {
  let api = "";
  if (isPagination) {
    api = filter
      ? `${process.env.NEXT_PUBLIC_BASE_API}/province/getallpaged?page=${page}&filter=${filter}`
      : `${process.env.NEXT_PUBLIC_BASE_API}/province/getallpaged?page=${page}`;
  } else {
    api = `${process.env.NEXT_PUBLIC_BASE_API}/province/getall`;
  }
  const accessToken = localStorage.getItem("accessToken");

  const data = await axios
    .get(api, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return [];
    });
  return data;
};
