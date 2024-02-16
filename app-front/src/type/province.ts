export interface IProvince {
  id: number;
  name: string;
}

export interface ICreateProvince {
  name: string;
}

export interface IUpdateProvince extends ICreateProvince {
  id: number;
}
