import { Accommodation } from "../../models/accommodationModel";
import { IBaseRepository } from "./IBaseRepository";

export interface IAccommodationRepository
  extends IBaseRepository<Accommodation> {}
