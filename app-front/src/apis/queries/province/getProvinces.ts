import axios from "axios";

export const getProvinces = async () => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/province`;
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
