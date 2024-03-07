import { IAccommodationType } from "./IAccommodationType";

export interface IAccommodation {
  id: number;
  title: string;
  accommodationTypeId: number;
  accommodationType?: IAccommodationType;
}
