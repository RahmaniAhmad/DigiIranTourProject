import { IAccommodationType } from "./IAccommodationType";
import { ICity } from "./ICity";

export interface IAccommodation {
  id: number;
  title: string;
  accommodationTypeId: number;
  cityId: number;
  address: string;
  accommodationType?: IAccommodationType;
  city?: ICity;
}
