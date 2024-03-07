class Accommodation {
  public id: number;
  public title: string;
  public accommodationType: AccommodationType;
  public city: City;

  constructor(
    id: number,
    title: string,
    accommodationType: AccommodationType,
    city: City
  ) {
    this.id = Number(id);
    this.title = title;
    this.accommodationType = accommodationType;
    this.city = city;
  }
}
