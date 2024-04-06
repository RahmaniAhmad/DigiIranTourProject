import { ICreateAccommodation } from "@/type/IAccommodation";
import axios from "axios";

export const createAccommodationApi = async (
  viewModel: ICreateAccommodation
) => {
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
  const response = await axios.post(
    "http://localhost:3001/api/accommodation",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
