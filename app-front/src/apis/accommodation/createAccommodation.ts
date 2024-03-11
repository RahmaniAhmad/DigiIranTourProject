import { ICreateAccommodation } from "@/type/IAccommodation";
import { AccommodationViewModel } from "@/viewModels/accommodation/accommodationViewModel";
import axios from "axios";

export const createAccommodationApi = async (
  viewModel: ICreateAccommodation
) => {
  const response = await axios.post(
    "http://localhost:3001/api/accommodation",
    viewModel,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
