import { Accommodation } from "@/models/accommodation/accommodation";
import { AccommodationViewModel } from "@/models/accommodation/accommodationViewModel";
import axios from "axios";

const mapToViewModel = (
  accommodation: Accommodation
): AccommodationViewModel => {
  return new AccommodationViewModel(
    accommodation.id,
    accommodation.province,
    accommodation.name
  );
};

export const getAccommodationApi = async (id: number) => {
  const api = `http://localhost:3001/api/accommodation/${id}`;
  const data = await axios.get(api).then((response) => {
    return response.data;
  });
  const accommodationViewModel: AccommodationViewModel = mapToViewModel(data);

  return accommodationViewModel;
};
