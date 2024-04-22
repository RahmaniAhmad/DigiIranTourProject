import { IUpdateAccommodation } from "@/type/IAccommodation";
import { AccommodationViewModel } from "@/viewModels/accommodation/accommodationViewModel";
import axios from "axios";

const mapToModel = (viewModel: any) => {
  return {
    id: viewModel.id,
    title: viewModel.title,
    accommodationTypeId: Number(viewModel.accommodationTypeId),
    cityId: Number(viewModel.cityId),
    address: viewModel.address,
    bedroomsCount: viewModel.bedroomsCount,
    bedsCount: viewModel.bedsCount,
    capacity: viewModel.capacity,
  };
};
export const updateAccommodationApi = async (
  id: number,
  data: IUpdateAccommodation
) => {
  const response = await axios
    .put(`${process.env.NEXT_PUBLIC_BASE_API}/accommodation/${id}`, {
      ...data,
      id,
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      debugger;
    });
  debugger;
  return response;
};
