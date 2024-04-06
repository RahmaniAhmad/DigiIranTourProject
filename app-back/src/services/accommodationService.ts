import { LIMIT } from "../config/const";
import { IAccommodation } from "../interfaces/IAccommodation";
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
  ): Promise<{ data: IAccommodation[]; rowsCount: number }> {
    return this.repository.getAll(filter, page, limit);
  }

  async getByType(
    type?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: IAccommodation[]; rowsCount: number }> {
    return this.repository.getByType(type, page, limit);
  }

  async getById(id: number): Promise<IAccommodation | null> {
    return this.repository.getById(id);
  }

  async create(data: any): Promise<{ message: string; data: IAccommodation }> {
    return this.repository.create(data);
  }

  async update(
    id: number,
    data: any
  ): Promise<{ message: string; data: IAccommodation }> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<{ message: string; data: IAccommodation }> {
    return this.repository.delete(id);
  }
}
