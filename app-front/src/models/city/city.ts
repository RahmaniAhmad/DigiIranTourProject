export class City {
  public id: number;
  public name: string;
  public province: Province;

  constructor(id: number, name: string, province: Province) {
    this.id = Number(id);
    this.name = name;
    this.province = province;
  }
}
