export class CityViewModel {
  public id?: number;
  public name: string;
  public provinceId: number;
  public provinceName: string;

  constructor(
    id: number,
    name: string,
    provinceId: number,
    provinceName: string
  ) {
    this.id = id;
    this.name = name;
    this.provinceId = provinceId;
    this.provinceName = provinceName;
  }
}
