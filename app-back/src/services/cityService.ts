import { LIMIT } from "../config/const";
import { City } from "../models/cityModel";
import { ICityRepository } from "../repositories/contracts/ICityRepository";
import { ICityService } from "./contracts/ICityService";

export class CityService implements ICityService {
  private cityRepository: ICityRepository;

  constructor(repository: ICityRepository) {
    this.cityRepository = repository;
  }

  async getAll(
    filter?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: City[]; rowsCount: number }> {
    return this.cityRepository.getAll(filter, page, limit);
  }

  async getById(id: number): Promise<City | null> {
    return this.cityRepository.getById(id);
  }

  async create(data: {
    name: string;
  }): Promise<{ message: string; data: City }> {
    return this.cityRepository.create(data);
  }

  async update(
    id: number,
    data: { name: string }
  ): Promise<{ message: string; data: City }> {
    return this.cityRepository.update(id, data);
  }

  async delete(id: number): Promise<{ message: string; data: City }> {
    return this.cityRepository.delete(id);
  }
}
