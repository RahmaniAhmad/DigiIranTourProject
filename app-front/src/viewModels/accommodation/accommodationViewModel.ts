export class AccommodationViewModel {
  public id?: number;
  public title: string;
  public accommodationTypeId: number;
  public accommodationTypeTitle: string;
  public cityId: number;
  public cityName: string;
  public address: string;
  public bedroomsCount: string;
  public rule: string;

  constructor(
    id: number,
    title: string,
    accommodationTypeId: number,
    accommodationTypeTitle: string,
    cityId: number,
    cityName: string,
    address: string,
    bedroomsCount: string,
    ruel: string
  ) {
    this.id = id;
    this.title = title;
    this.accommodationTypeId = accommodationTypeId;
    this.accommodationTypeTitle = accommodationTypeTitle;
    this.cityId = cityId;
    this.cityName = cityName;
    this.address = address;
    this.bedroomsCount = bedroomsCount;
    this.rule = ruel;
  }
}
