import { LIMIT } from "../config/const";
import { IAccommodationType } from "../interfaces/IAccommodationType";
import { IAccommodationTypeRepository } from "../repositories/contracts/IAccommodationTypeRepository";
import { IAccommodationTypeService } from "./contracts/IAccommodationTypeService";

export class AccommodationTypeService implements IAccommodationTypeService {
  private repository: IAccommodationTypeRepository;

  constructor(repository: IAccommodationTypeRepository) {
    this.repository = repository;
  }

  async getAll(
    filter?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: IAccommodationType[]; rowsCount: number }> {
    return this.repository.getAll(filter, page, limit);
  }

  async getById(id: number): Promise<IAccommodationType | null> {
    return this.repository.getById(id);
  }

  async create(data: {
    name: string;
  }): Promise<{ message: string; data: IAccommodationType }> {
    return this.repository.create(data);
  }

  async update(
    id: number,
    data: { name: string }
  ): Promise<{ message: string; data: IAccommodationType }> {
    return this.repository.update(id, data);
  }

  async delete(
    id: number
  ): Promise<{ message: string; data: IAccommodationType }> {
    return this.repository.delete(id);
  }
}
