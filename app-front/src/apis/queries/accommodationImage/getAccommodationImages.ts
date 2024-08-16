import { AccommodationImageListModel } from "@/interfaces";
import axios from "axios";

const mapToViewModel = (model: Array<any>): AccommodationImageListModel[] => {
  const viewModel: AccommodationImageListModel[] = [];
  model.map((item) => {
    viewModel.push({
      id: item.id,
      title: item.title,
      url: item.url,
    });
  });
  return viewModel;
};

export const getAccommodationImagesApi = async (accommodationId: number) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodationImage/GetByAccommodationId/${accommodationId}`;
  const data = await axios.get(api).then((response) => {
    return {
      data: mapToViewModel(response.data.data),
    };
  });

  return data;
};
