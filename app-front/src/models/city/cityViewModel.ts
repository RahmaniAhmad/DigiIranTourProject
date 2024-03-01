export class CityViewModel {
  public id: number;
  public provinceName: string;
  public name: string;
  public provinceId: number;

  constructor(id: number, province: Province, name: string) {
    this.id = id;
    this.provinceName = province.name;
    this.name = name;
    this.provinceId = province.id;
  }
}
