import AccommodationTypeModel from "../models/accommodationTypeModel";
import { Province, accommodation_type } from "@prisma/client";

const model = new AccommodationTypeModel();

interface AccommodationTypeService {
  getAll(
    filter?: string,
    page?: number,
    limit?: number
  ): Promise<{ data: accommodation_type[]; rowsCount: number }>;
  getById(id: number): Promise<accommodation_type | null>;
  create(data: {
    title: string;
  }): Promise<{ message: string; data: accommodation_type }>;
  update(
    id: number,
    data: { title: string }
  ): Promise<{ message: string; data: accommodation_type }>;
  delete(id: number): Promise<{ message: string; data: accommodation_type }>;
}

const provinceService: AccommodationTypeService = {
  getAll: async (filter?: string, page?: number, limit?: number) => {
    return model.getAll(filter, page, limit);
  },

  getById: async (id: number) => {
    return model.getById(id);
  },

  create: async (data: { title: string }) => {
    return model.create(data);
  },

  update: async (id: number, data: { title: string }) => {
    return model.update(id, data);
  },

  delete: async (id: number) => {
    return model.delete(id);
  },
};

export default provinceService;
