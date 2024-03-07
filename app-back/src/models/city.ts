import { IProvince } from "../interfaces/IProvince";

export class City {
  constructor(
    public id: number,
    public name: string,
    public provinceId: number,
    public province?: IProvince
  ) {}
}
