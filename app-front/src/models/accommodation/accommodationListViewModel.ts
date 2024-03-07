class AccommodationListViewModel {
  public id: number;
  public title: string;
  public accommodationTypeTitle: string;
  public provinceName: string;
  public cityName: string;

  constructor(
    id: number,
    title: string,
    accommodationType: AccommodationType,
    city: City
  ) {
    this.id = id;
    this.title = title;
    this.accommodationTypeTitle = accommodationType.title;
    this.provinceName = city.province.name;
    this.cityName = city.name;
  }
}
