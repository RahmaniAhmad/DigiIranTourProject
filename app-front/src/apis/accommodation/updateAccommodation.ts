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
  viewModel: IUpdateAccommodation
) => {
  // const model = mapToModel(viewModel);
  const formData = new FormData();
  formData.append(
    "accommodationTypeId",
    viewModel.accommodationTypeId.toString()
  );
  formData.append("address", viewModel.address);
  formData.append("bedroomsCount", viewModel.bedroomsCount);
  formData.append("bedsCount", viewModel.bedsCount);
  formData.append("capacity", viewModel.capacity);
  formData.append("cityId", viewModel.cityId.toString());
  formData.append("title", viewModel.title);
  formData.append("accommodationImage", viewModel.accommodationImage);
  formData.append("imageName", viewModel.imageName);
  const response = await axios.put(
    `http://localhost:3001/api/accommodation/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
