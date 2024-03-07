import { IProvince } from "../../interfaces/IProvince";

export class CityViewModel {
  public id?: number;
  public name: string;
  public province: IProvince;

  constructor(id: number, name: string, province: IProvince) {
    this.id = id;
    this.name = name;
    this.province = province;
  }
}
