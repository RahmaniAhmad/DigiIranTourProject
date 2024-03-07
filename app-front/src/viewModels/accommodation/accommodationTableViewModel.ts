export class AccommodationTableViewModel {
  public id?: number;
  public title: string;
  public accommodationTypeTitle: string;

  constructor(id: number, title: string, accommodationTypeTitle: string) {
    this.id = id;
    this.title = title;
    this.accommodationTypeTitle = accommodationTypeTitle;
  }
}
