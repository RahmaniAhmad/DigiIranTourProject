import { AccommodationModel, PublicAccommodationModel } from "@/interfaces";
import axios from "axios";

const mapToViewModel = (model: any): PublicAccommodationModel => {
  const viewModel: PublicAccommodationModel = {
    id: model.id,
    type: model.accommodationType.name,
    city: model.city.name,
    title: model.title,
    star: model.star,
    address: model.address,
    bedroomsCount: model.bedroomsCount,
    rule: model.rule,
    imageUrl:
      model.accommodationImages.length > 0 && model.accommodationImages[0].url,
    rooms: model.accommodationRooms,
  };

  return viewModel;
};

export const getAccommodationApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/GetById/${id}`;
  const data = await axios.get(api).then((response) => {
    return mapToViewModel(response.data);
  });

  return data;
};
