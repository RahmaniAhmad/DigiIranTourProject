export class AccommodationTableViewModel {
  public id?: number;
  public provinceName: string;
  public cityName: string;
  public title: string;
  public accommodationTypeTitle: string;
  public address: string;
  public bedroomsCount: string;
  public bedsCount: string;
  public capacity: string;
  public imageName: string;

  constructor(
    id: number,
    title: string,
    accommodationTypeTitle: string,
    provinceNmae: string,
    cityName: string,
    address: string,
    bedroomsCount: string,
    bedsCount: string,
    capacity: string,
    imageName: string
  ) {
    this.id = id;
    this.provinceName = provinceNmae;
    this.cityName = cityName;
    this.title = title;
    this.accommodationTypeTitle = accommodationTypeTitle;
    this.address = address;
    this.bedroomsCount = bedroomsCount;
    this.bedsCount = bedsCount;
    this.capacity = capacity;
    this.imageName = imageName;
  }
}
