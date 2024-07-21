export class accommodationRoomTableViewModel {
  public id?: number;
  public title: string;
  public bedsCount: string;
  public capacity: string;
  public price: string;

  constructor(
    id: number,
    title: string,
    bedsCount: string,
    capacity: string,
    price: string
  ) {
    this.id = id;
    this.title = title;
    this.bedsCount = bedsCount;
    this.capacity = capacity;
    this.price = price;
  }
}
