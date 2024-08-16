import { AccommodationListModel } from "@/interfaces";
import { formatMoney } from "@/utils/money";
import axios from "axios";

const mapToViewModel = (model: Array<any>): AccommodationListModel[] => {
  const viewModel: AccommodationListModel[] = [];
  model.map((item) => {
    const minPrice = item.accommodationRooms.reduce(
      (min: any, room: any) => (room.price < min ? room.price : min),
      item.accommodationRooms[0].price
    );
    const maxPrice = item.accommodationRooms.reduce(
      (max: any, room: any) => (room.price > max ? room.price : max),
      item.accommodationRooms[0].price
    );

    viewModel.push({
      id: item.id,
      province: item.city.province.name,
      city: item.city.name,
      type: item.accommodationType.name,
      title: item.title,
      star: item.star,
      address: item.address,
      bedroomsCount: item.bedroomsCount,
      imageUrl:
        item.accommodationImages.length > 0 && item.accommodationImages[0].url,
      price:
        minPrice != maxPrice
          ? formatMoney(minPrice) + " تا " + formatMoney(maxPrice)
          : formatMoney(minPrice),
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
    api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getAccommodations/?page=${page}`;
  } else {
    api = `${process.env.NEXT_PUBLIC_BASE_API}/accommodation/getAccommodations`;
  }
  const data = await axios.get(api).then((response) => {
    return {
      count: response.data.totalCount,
      data: mapToViewModel(response.data.data),
    };
  });

  return data;
};
