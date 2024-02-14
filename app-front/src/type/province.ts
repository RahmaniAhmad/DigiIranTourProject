export interface IProvince {
  id: number;
  name: string;
}

export interface ICreateProvince {
  name: string;
}

export interface IEditProvince extends ICreateProvince {
  id: number;
}
