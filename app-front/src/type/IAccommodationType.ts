export interface IAccommodationType {
  id: number;
  title: string;
}

export interface ICreateAccommodationType {
  title: string;
}

export interface IUpdateAccommodationType extends ICreateAccommodationType {
  id: number;
}
