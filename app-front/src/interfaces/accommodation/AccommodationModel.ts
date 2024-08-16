export interface AccommodationModel {
  id?: number;
  title: string;
  star: string;
  accommodationTypeId: number;
  accommodationTypeTitle: string;
  cityId: number;
  cityName: string;
  address: string;
  bedroomsCount: string;
  rule: string;
}
