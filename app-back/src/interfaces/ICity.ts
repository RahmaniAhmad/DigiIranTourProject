import { IProvince } from "./IProvince";

export interface ICity {
  id: number;
  name: string;
  provinceId: number;
  province?: IProvince;
}
