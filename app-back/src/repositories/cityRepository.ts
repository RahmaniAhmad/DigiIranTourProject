import { ICityRepository } from "./contracts/ICityRepository";
import prisma from "../config/dbPrisma";
import { City } from "../models/cityModel";
import { LIMIT } from "../config/const";

export class CityRepository implements ICityRepository {
  async getAll(
    filter?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: City[]; rowsCount: number }> {
    let data: City[];
    let dataCount = 0;

    if (filter !== undefined) {
      data = await prisma.city.findMany({
        orderBy: { id: "asc" },
        where: { name: { contains: filter } },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, name: true, provinceId: true },
      });
      dataCount = Math.ceil(
        (await prisma.city.count({
          where: { name: { contains: filter } },
        })) / limit
      );
    } else {
      data = await prisma.city.findMany({
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, name: true, province: true },
      });
      dataCount = Math.ceil((await prisma.city.count()) / limit);
    }

    return {
      data: data,
      rowsCount: dataCount,
    };
  }

  async getById(id: number): Promise<City | null> {
    return prisma.city.findUnique({
      where: { id: id },
      select: { id: true, name: true, provinceId: true },
    });
  }

  async create(data: {
    name: string;
    provinceId: number;
  }): Promise<{ message: string; data: City }> {
    const result = await prisma.city.create({
      data: data,
    });

    return { message: "Data inserted successfully", data: result };
  }

  async update(
    id: number,
    data: { name: string }
  ): Promise<{ message: string; data: City }> {
    const result = await prisma.city.update({
      where: { id: id },
      data: data,
    });

    return { message: "Data updated successfully", data: result };
  }

  async delete(id: number): Promise<{ message: string; data: City }> {
    const result = await prisma.city.delete({
      where: { id: id },
    });

    return { message: "Data deleted successfully", data: result };
  }
}
