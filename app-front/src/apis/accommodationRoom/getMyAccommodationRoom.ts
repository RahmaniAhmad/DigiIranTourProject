import { AccommodationViewModel } from "@/viewModels/accommodation/accommodationViewModel";
import axios from "axios";

const mapToViewModel = (model: any): AccommodationViewModel => {
  const viewModel: AccommodationViewModel = {
    id: model.id,
    accommodationTypeId: model.accommodationType.id,
    accommodationTypeTitle: model.accommodationType.name,
    cityId: model.city.id,
    cityName: model.city.name,
    title: model.title,
    address: model.address,
    bedroomsCount: model.bedroomsCount,
    rule: model.rule,
  };

  return viewModel;
};

export const getMyAccommodationRoomApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationRoom/getMyAccommodationRoom/${id}`;
  const data = await axios.get(api).then((response) => {
    return mapToViewModel(response.data);
  });

  return data;
};
