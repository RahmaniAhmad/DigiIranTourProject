export interface ICity {
  id: number;
  name: string;
  provinceId: number;
}

export interface ICreateCity {
  name: string;
  provinceId: number;
}

export interface IUpdateCity extends ICreateCity {
  id: number;
}
