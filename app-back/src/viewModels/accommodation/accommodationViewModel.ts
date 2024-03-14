import { IAccommodationType } from "../../interfaces/IAccommodationType";
import { ICity } from "../../interfaces/ICity";
import { IProvince } from "../../interfaces/IProvince";

export class AccommodationViewModel {
  public id?: number;
  public title: string;
  public accommodationType: IAccommodationType;
  public city: ICity;
  public address: string;
  public bedroomsCount: string;
  public bedsCount: string;
  public capacity: string;
  public imageNmae: string;

  constructor(
    id: number,
    title: string,
    accommodationType: IAccommodationType,
    city: ICity,
    address: string,
    bedroomsCount: string,
    bedsCount: string,
    capacity: string,
    imageName: string
  ) {
    this.id = id;
    this.title = title;
    this.accommodationType = accommodationType;
    this.city = city;
    this.address = address;
    this.bedroomsCount = bedroomsCount;
    this.bedsCount = bedsCount;
    this.capacity = capacity;
    this.imageNmae = imageName;
  }
}
