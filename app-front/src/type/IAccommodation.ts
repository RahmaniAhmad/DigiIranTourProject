// export interface IAccommodation {
//   id: number;
//   title: string;
//   accommodationTypeId: number;
// }

export interface ICreateAccommodation {
  title: string;
  accommodationTypeId: number;
  cityId: number;
  address: string;
}

export interface IUpdateAccommodation extends ICreateAccommodation {
  id: number;
}
