import axios from "axios";

const mapToModel = (viewModel: AccommodationViewModel): Accommodation => {
  return {
    id: viewModel.id,
    name: viewModel.name,
    provinceId: Number(viewModel.provinceId),
  };
};

export const createAccommodationApi = async (
  viewModel: AccommodationViewModel
) => {
  const model = mapToModel(viewModel);
  const response = await axios.post(
    "http://localhost:3001/api/accommodation",
    model
  );
  return response.data;
};
