import { IAccommodationType } from "../../interfaces/IAccommodationType";
import { ICity } from "../../interfaces/ICity";
import { IProvince } from "../../interfaces/IProvince";

export class AccommodationViewModel {
  public id?: number;
  public title: string;
  public accommodationType: IAccommodationType;
  public city: ICity;
  public address: string;

  constructor(
    id: number,
    title: string,
    accommodationType: IAccommodationType,
    city: ICity,
    address: string
  ) {
    this.id = id;
    this.title = title;
    this.accommodationType = accommodationType;
    this.city = city;
    this.address = address;
  }
}
