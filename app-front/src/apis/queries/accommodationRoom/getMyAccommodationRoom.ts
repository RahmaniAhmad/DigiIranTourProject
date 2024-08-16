import { AccommodationRoomModel } from "@/interfaces";
import axios from "axios";

const mapToViewModel = (model: any): AccommodationRoomModel => {
  const viewModel: AccommodationRoomModel = {
    id: model.id,
    title: model.title,
    bedsCount: model.bedsCount,
    capacity: model.capacity,
    price: model.price,
    description: model.description,
  };

  return viewModel;
};

export const getMyAccommodationRoomApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationRoom/GetMyAccommodationId/${id}`;
  const data = await axios.get(api).then((response) => {
    return mapToViewModel(response.data);
  });

  return data;
};
