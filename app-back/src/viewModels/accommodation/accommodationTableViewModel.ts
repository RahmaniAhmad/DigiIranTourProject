export class AccommodationTableViewModel {
  public id?: number;
  public title: string;
  public accommodationTypeTitle: string;
  public provinceName: string;
  public cityName: string;
  public address: string;
  bedroomsCount: String;
  bedsCount: String;
  capacity: String;

  constructor(
    id: number,
    title: string,
    accommodationTypeTitle: string,
    provinceNmae: string,
    cityName: string,
    address: string,
    bedroomsCount: String,
    bedsCount: String,
    capacity: String
  ) {
    this.id = id;
    this.title = title;
    this.accommodationTypeTitle = accommodationTypeTitle;
    this.provinceName = provinceNmae;
    this.cityName = cityName;
    this.address = address;
    this.bedroomsCount = bedroomsCount;
    this.bedsCount = bedsCount;
    this.capacity = capacity;
  }
}
