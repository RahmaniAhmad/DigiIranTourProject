import axios from "axios";

export const createAccommodationImageApi = async (data: any) => {
  const formData = new FormData();
  formData.append("accommodationId", data.accommodationId);
  formData.append("title", data.title);
  if (data.accommodationImage) {
    formData.append("accommodationImage", data.accommodationImage);
  }

  await axios
    .post(`${process.env.NEXT_PUBLIC_BASE_API}/accommodationImage`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {});
};
