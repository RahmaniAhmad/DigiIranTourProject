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
  };
};
export const updateAccommodationApi = async (
  id: number,
  viewModel: IUpdateAccommodation
) => {
  const model = mapToModel(viewModel);
  const response = await axios.put(
    `http://localhost:3001/api/accommodation/${id}`,
    model
  );
  return response.data;
};
