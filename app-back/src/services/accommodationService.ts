import { LIMIT } from "../config/const";
import { AccommodationType } from "../models/accommodationTypeModel";
import { IAccommodationRepository } from "../repositories/contracts/IAccommodationRepository";
import { IAccommodationService } from "./contracts/IAccommodationService";

export class AccommodationService implements IAccommodationService {
  private repository: IAccommodationRepository;

  constructor(repository: IAccommodationRepository) {
    this.repository = repository;
  }

  async getAll(
    filter?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: AccommodationType[]; rowsCount: number }> {
    return this.repository.getAll(filter, page, limit);
  }

  async getById(id: number): Promise<AccommodationType | null> {
    return this.repository.getById(id);
  }

  async create(data: {
    name: string;
  }): Promise<{ message: string; data: AccommodationType }> {
    return this.repository.create(data);
  }

  async update(
    id: number,
    data: { name: string }
  ): Promise<{ message: string; data: AccommodationType }> {
    return this.repository.update(id, data);
  }

  async delete(
    id: number
  ): Promise<{ message: string; data: AccommodationType }> {
    return this.repository.delete(id);
  }
}
