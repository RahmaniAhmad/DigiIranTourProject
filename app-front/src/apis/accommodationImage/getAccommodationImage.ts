import { AccommodationImageModel } from "@/interfaces";
import axios from "axios";

const mapToViewModel = (model: any): AccommodationImageModel => {
  const viewModel: AccommodationImageModel = {
    id: model.id,
    url: model.url,
    title: model.title,
  };

  return viewModel;
};

export const getAccommodationImageApi = async (id: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationImage/getById/${id}`;
  const data = await axios.get(api).then((response) => {
    return mapToViewModel(response.data);
  });

  return data;
};
