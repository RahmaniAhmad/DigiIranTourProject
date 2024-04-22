import { AccommodationTableViewModel } from "@/viewModels/accommodation/accommodationTableViewModel";
import axios from "axios";

const mapToViewModel = (model: Array<any>): AccommodationTableViewModel[] => {
  const viewModel: AccommodationTableViewModel[] = [];
  model.map((item) => {
    viewModel.push({
      id: item.id,
      provinceName: item.provinceName,
      cityName: item.cityName,
      accommodationTypeTitle: item.accommodationTypeTitle,
      title: item.title,
      address: item.address,
      bedroomsCount: item.bedroomsCount,
      bedsCount: item.bedsCount,
      capacity: item.capacity,
      imageName: item.imageName,
    });
  });
  return viewModel;
};

export const getAccommodationsApi = async (
  isPagination = true,
  page: number = 1,
  filter?: string
) => {
  let api = "";
  if (isPagination) {
    api = filter
      ? `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getallpaged?page=${page}&filter=${filter}`
      : `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getallpaged?page=${page}`;
  } else {
    api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getall`;
  }
  const data = await axios.get(api).then((response) => {
    return response.data;
  });

  return data;
};
