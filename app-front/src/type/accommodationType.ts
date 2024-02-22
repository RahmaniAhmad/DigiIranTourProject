export interface IAccommodationType {
  id: number;
  title: string;
}

export interface ICreateAccommodationType {
  title: string;
}

export interface IUpdateIAccommodationType extends ICreateAccommodationType {
  id: number;
}
