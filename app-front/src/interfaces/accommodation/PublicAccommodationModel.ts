import { PublicAccommodationRoomModel } from "../accommodationRoom";

export interface PublicAccommodationModel {
  id: number;
  title: string;
  star: string;
  type: string;
  city: string;
  address: string;
  bedroomsCount: string;
  rule: string;
  imageUrl: string;
  rooms: PublicAccommodationRoomModel[];
}
