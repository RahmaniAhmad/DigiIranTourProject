import { ProvinceModel } from "./provinceModel";

export class CityModel {
  id: number;
  name: string;
  provinceId: number;
  province?: ProvinceModel;

  constructor(id: number, name: string, provinceId: number) {
    this.id = Number(id);
    this.name = name;
    this.provinceId = provinceId;
  }
}
