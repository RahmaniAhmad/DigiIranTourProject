import { IAccommodation } from "../../interfaces/IAccommodation";
import { IBaseRepository } from "./IBaseRepository";

export interface IAccommodationRepository
  extends IBaseRepository<IAccommodation> {
  getByType(
    type?: string,
    page?: number,
    limit?: number
  ): Promise<{ data: IAccommodation[]; rowsCount: number }>;
}
