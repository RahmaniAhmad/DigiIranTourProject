import { IAccommodationType } from "../interfaces/IAccommodationType";
import { ICity } from "../interfaces/ICity";

export class Accommodation {
  constructor(
    id: number,
    title: string,
    accommodationTypeId: number,
    cityId: number,
    address: string,
    bedroomsCount: string,
    bedsCount: string,
    capacity: string,
    imageName: string,
    accommodationType?: IAccommodationType,
    city?: ICity
  ) {}
}
