import { AccommodationListModel } from "@/inferfaces";
import axios from "axios";

const mapToViewModel = (model: Array<any>): AccommodationListModel[] => {
  const viewModel: AccommodationListModel[] = [];
  model.map((item) => {
    viewModel.push({
      id: item.id,
      province: item.city.province.name,
      city: item.city.name,
      type: item.accommodationType.name,
      title: item.title,
      address: item.address,
      bedroomsCount: item.bedroomsCount,
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
    api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/?page=${page}`;
  } else {
    api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation`;
  }
  const data = await axios.get(api).then((response) => {
    return {
      count: response.data.totalCount,
      data: mapToViewModel(response.data.data),
    };
  });

  return data;
};
