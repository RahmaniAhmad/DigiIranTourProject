import axios from "axios";

export const updateAccommodationApi = async (id: number, data: any) => {
  const formData = new FormData();
  formData.append("Title", data.title);
  formData.append("Address", data.address);
  formData.append("BedroomsCount", data.bedroomsCount);
  formData.append("BedsCount", data.bedsCount);
  formData.append("Capacity", data.capacity);
  formData.append("Price", data.price);
  formData.append("CityId", data.cityId.toString());
  formData.append("AccommodationTypeId", data.accommodationTypeId.toString());
  if (data.accommodationImage) {
    formData.append("AccommodationImage", data.accommodationImage);
  }

  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
