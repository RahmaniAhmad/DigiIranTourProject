export class AccommodationTableViewModel {
  public id?: number;
  public province: string;
  public city: string;
  public type: string;
  public title: string;
  public address: string;
  public bedroomsCount: string;

  constructor(
    id: number,
    province: string,
    city: string,
    type: string,
    title: string,
    address: string,
    bedroomsCount: string
  ) {
    this.id = id;
    this.province = province;
    this.city = city;
    this.title = title;
    this.type = type;
    this.address = address;
    this.bedroomsCount = bedroomsCount;
  }
}
