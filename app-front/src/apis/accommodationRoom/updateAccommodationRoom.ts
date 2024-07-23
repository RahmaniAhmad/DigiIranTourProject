import axios from "axios";

export const updateAccommodationApi = async (id: number, data: any) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodationRoom/${id}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
