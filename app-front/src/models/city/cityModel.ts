import { ProvinceModel } from "../province/province";

export class CityModel1 {
  public id?: number;
  public name: string;
  public provinceId: number;
  public province?: ProvinceModel;

  constructor(id: number, name: string, province: ProvinceModel) {
    this.id = Number(id);
    this.name = name;
    this.provinceId = province.id;
    this.province = province;
  }
}
