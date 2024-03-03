export class CityListViewModel {
  public id: number;
  public provinceName: string;
  public name: string;

  constructor(id: number, province: Province, name: string) {
    this.id = id;
    this.provinceName = province.name;
    this.name = name;
  }
}
