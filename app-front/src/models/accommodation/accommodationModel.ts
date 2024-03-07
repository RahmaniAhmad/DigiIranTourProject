class AccommodationModel {
  public id: number;
  public title: string;
  public accommodationTypeId: number;
  public cityId: number;

  constructor(
    id: number,
    title: string,
    accommodationTypeId: number,
    cityId: number
  ) {
    this.id = Number(id);
    this.title = title;
    this.accommodationTypeId = accommodationTypeId;
    this.cityId = cityId;
  }
}
