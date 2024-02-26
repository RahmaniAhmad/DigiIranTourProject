import { AccommodationType } from "../../models/accommodationTypeModel";
import { IBaseRepository } from "./IBaseRepository";

export interface IAccommodationTypeRepository
  extends IBaseRepository<AccommodationType> {}
