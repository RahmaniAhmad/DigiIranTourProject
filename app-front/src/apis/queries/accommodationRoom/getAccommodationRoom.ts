import { PublicAccommodationRoomModel } from "@/interfaces";
import axios from "axios";

const mapToViewModel = (model: any): PublicAccommodationRoomModel => {
  const viewModel: PublicAccommodationRoomModel = {
    id: model.id,
    title: model.title,
    bedsCount: model.bedsCount,
    capacity: model.capacity,
    price: model.price,
    description: model.description,
  };

  return viewModel;
};

export const getAccommodationRoomApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationRoom/getById/${id}`;
  const data = await axios.get(api).then((response) => {
    return mapToViewModel(response.data);
  });

  return data;
};
