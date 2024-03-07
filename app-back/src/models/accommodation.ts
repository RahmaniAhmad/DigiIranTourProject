import { IAccommodationType } from "../interfaces/IAccommodationType";

export class Accommodation {
  constructor(
    id: number,
    title: string,
    accommodationTypeId: number,
    accommodationType?: IAccommodationType
  ) {}
}
