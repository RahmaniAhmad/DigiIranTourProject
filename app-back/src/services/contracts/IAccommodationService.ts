import { Accommodation } from "../../models/accommodation";
import { IBaseService } from "./IBaseService";

export interface IAccommodationService extends IBaseService<Accommodation> {
  getByType(
    filter?: string,
    page?: number,
    limit?: number
  ): Promise<{ data: Accommodation[]; rowsCount: number }>;
}
