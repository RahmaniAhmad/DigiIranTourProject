import axios from "axios";

export const updateAccommodationImageApi = async (id: number, data: any) => {
  const formData = new FormData();
  formData.append("Id", id.toString());
  formData.append("Title", data.title);
  if (data.accommodationImage) {
    formData.append("AccommodationImage", data.accommodationImage);
  }

  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodationImage/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
