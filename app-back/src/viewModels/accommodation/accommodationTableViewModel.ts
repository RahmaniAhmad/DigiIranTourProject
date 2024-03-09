export class AccommodationTableViewModel {
  public id?: number;
  public title: string;
  public accommodationTypeTitle: string;
  public cityName: string;
  public address: string;

  constructor(
    id: number,
    title: string,
    accommodationTypeTitle: string,
    cityName: string,
    address: string
  ) {
    this.id = id;
    this.title = title;
    this.accommodationTypeTitle = accommodationTypeTitle;
    this.cityName = cityName;
    this.address = address;
  }
}
