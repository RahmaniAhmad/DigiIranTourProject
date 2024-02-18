import ProvinceModel from "../models/provinceModel";
import { Province } from "@prisma/client";

const provinceModel = new ProvinceModel();

interface ProvinceService {
  getProvinces(
    filter?: string,
    page?: number,
    limit?: number
  ): Promise<{ data: Province[]; rowsCount: number }>;
  getProvinceById(id: number): Promise<Province | null>;
  createProvince(data: {
    name: string;
  }): Promise<{ message: string; data: Province }>;
  updateProvince(
    id: number,
    data: { name: string }
  ): Promise<{ message: string; data: Province }>;
  deleteProvince(id: number): Promise<{ message: string; data: Province }>;
}

const provinceService: ProvinceService = {
  getProvinces: async (filter?: string, page?: number, limit?: number) => {
    return provinceModel.getProvinces(filter, page, limit);
  },

  getProvinceById: async (id: number) => {
    return provinceModel.getProvinceById(id);
  },

  createProvince: async (data: { name: string }) => {
    return provinceModel.createProvince(data);
  },

  updateProvince: async (id: number, data: { name: string }) => {
    return provinceModel.updateProvince(id, data);
  },

  deleteProvince: async (id: number) => {
    return provinceModel.deleteProvince(id);
  },
};

export default provinceService;
