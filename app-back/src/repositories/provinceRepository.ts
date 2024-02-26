import { IProvinceRepository } from "./contracts/IProvinceRepository";
import prisma from "../config/dbPrisma";
import { Province } from "../models/provinceModel";

export class ProvinceRepository implements IProvinceRepository {
  async getAll(
    filter?: string,
    page = 1,
    limit = 10
  ): Promise<{ data: Province[]; rowsCount: number }> {
    let data: Province[];
    let dataCount = 0;

    if (filter !== undefined) {
      data = await prisma.province.findMany({
        orderBy: { id: "asc" },
        where: { name: { contains: filter } },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, name: true },
      });
      dataCount = Math.ceil(
        (await prisma.province.count({
          where: { name: { contains: filter } },
        })) / limit
      );
    } else {
      data = await prisma.province.findMany({
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, name: true },
      });
      dataCount = Math.ceil((await prisma.province.count()) / limit);
    }

    return {
      data: data,
      rowsCount: dataCount,
    };
  }

  async getById(id: number): Promise<Province | null> {
    return prisma.province.findUnique({
      where: { id: id },
      select: { id: true, name: true },
    });
  }

  async create(data: {
    name: string;
  }): Promise<{ message: string; data: Province }> {
    const result = await prisma.province.create({
      data: data,
    });

    return { message: "Data inserted successfully", data: result };
  }

  async update(
    id: number,
    data: { name: string }
  ): Promise<{ message: string; data: Province }> {
    const result = await prisma.province.update({
      where: { id: id },
      data: data,
    });

    return { message: "Data updated successfully", data: result };
  }

  async delete(id: number): Promise<{ message: string; data: Province }> {
    const result = await prisma.province.delete({
      where: { id: id },
    });

    return { message: "Data deleted successfully", data: result };
  }
}
