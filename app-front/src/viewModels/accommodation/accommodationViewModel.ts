export class AccommodationViewModel {
  public id?: number;
  public title: string;
  public accommodationTypeId: number;
  public accommodationTypeTitle: string;

  constructor(
    id: number,
    title: string,
    accommodationTypeId: number,
    accommodationTypeTitle: string
  ) {
    this.id = id;
    this.title = title;
    this.accommodationTypeId = accommodationTypeId;
    this.accommodationTypeTitle = accommodationTypeTitle;
  }
}
