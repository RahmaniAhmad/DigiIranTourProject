import { accommodationRoomTableViewModel } from "@/viewModels/accommodationRoom/accommodationRoomTableViewModel";
import axios from "axios";
import { error } from "console";

const mapToViewModel = (
  model: Array<any>
): accommodationRoomTableViewModel[] => {
  const viewModel: accommodationRoomTableViewModel[] = [];
  model.map((item) => {
    viewModel.push({
      id: item.id,
      title: item.title,
      bedsCount: item.bedsCount,
      capacity: item.capacity,
      price: item.price,
    });
  });
  return viewModel;
};

export const getAccommodationRoomsApi = async (accommodationId: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationRoom/GetByAccommodationId/${accommodationId}`;
  const data = await axios.get(api).then((response) => {
    return {
      data: mapToViewModel(response.data.data),
    };
  });

  return data;
};
