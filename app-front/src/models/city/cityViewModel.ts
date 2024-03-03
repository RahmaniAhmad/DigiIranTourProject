export class CityViewModel {
  public id?: number;
  public name: string;
  public provinceId: number;
  public provinceName?: string;

  constructor(id: number, province: Province, name: string) {
    this.id = id;
    this.name = name;
    this.provinceId = province.id;
    this.provinceName = province.name;
  }
}
