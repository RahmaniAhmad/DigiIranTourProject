class AccommodationViewModel {
  public id?: number;
  public title: string;
  public provinceId: number;
  public provinceName?: string;
  public accommodationTypeId: number;
  public accommodationType?: string;

  constructor(
    id: number,
    title: string,
    province: Province,
    accommodationType: AccommodationType
  ) {
    this.id = id;
    this.title = title;
    this.provinceId = province.id;
    this.provinceName = province.name;
    this.accommodationTypeId = accommodationType.id;
    this.accommodationType = accommodationType.title;
  }
}
