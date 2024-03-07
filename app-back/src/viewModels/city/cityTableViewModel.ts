export class CityTableViewModel {
  public id?: number;
  public name: string;
  public provinceName: string;

  constructor(id: number, name: string, provinceName: string) {
    this.id = id;
    this.name = name;
    this.provinceName = provinceName;
  }
}
