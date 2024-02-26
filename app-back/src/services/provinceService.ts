import { LIMIT } from "../config/const";
import { Province } from "../models/provinceModel";
import { IProvinceRepository } from "../repositories/contracts/IProvinceRepository";
import { IProvinceService } from "./contracts/IProvinceService";

export class ProvinceService implements IProvinceService {
  private provinceRepository: IProvinceRepository;

  constructor(repository: IProvinceRepository) {
    this.provinceRepository = repository;
  }

  async getAll(
    filter?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: Province[]; rowsCount: number }> {
    return this.provinceRepository.getAll(filter, page, limit);
  }

  async getById(id: number): Promise<Province | null> {
    return this.provinceRepository.getById(id);
  }

  async create(data: {
    name: string;
  }): Promise<{ message: string; data: Province }> {
    return this.provinceRepository.create(data);
  }

  async update(
    id: number,
    data: { name: string }
  ): Promise<{ message: string; data: Province }> {
    return this.provinceRepository.update(id, data);
  }

  async delete(id: number): Promise<{ message: string; data: Province }> {
    return this.provinceRepository.delete(id);
  }
}
