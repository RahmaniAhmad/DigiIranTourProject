import { Province } from "./provinceModel";

export interface City {
  id: number;
  name: string;
  province?: Province;
  pvovinceId?: number;
}
