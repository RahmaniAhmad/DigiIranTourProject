import { ProvinceModel } from "../../models/provinceModel";

export class CityViewModel {
  public id?: number;
  public name: string;
  public province: ProvinceModel;

  constructor(id: number, name: string, province: ProvinceModel) {
    this.id = id;
    this.name = name;
    this.province = province;
  }
}
