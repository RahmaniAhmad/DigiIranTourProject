import { AccommodationImageModel } from "@/interfaces";
import axios from "axios";

const mapToViewModel = (model: any): AccommodationImageModel => {
  const viewModel: AccommodationImageModel = {
    id: model.id,
    title: model.title,
    url: model.url,
  };

  return viewModel;
};

export const getMyAccommodationImageApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationImage/GetMyAccommodationImage/${id}`;
  const data = await axios.get(api).then((response) => {
    return mapToViewModel(response.data);
  });

  return data;
};
