import { IAccommodationType } from "../../interfaces/IAccommodationType";
import { IProvince } from "../../interfaces/IProvince";

export class AccommodationViewModel {
  public id?: number;
  public title: string;
  public accommodationType: IAccommodationType;

  constructor(
    id: number,
    title: string,
    accommodationType: IAccommodationType
  ) {
    this.id = id;
    this.title = title;
    this.accommodationType = accommodationType;
  }
}
