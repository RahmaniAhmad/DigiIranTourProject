import { LIMIT } from "../config/const";
import prisma from "../config/dbPrisma";
import { Accommodation } from "../models/accommodationTypeModel";
import { IAccommodationRepository } from "./contracts/IAccommodationRepository";

export class AccommodationRepository implements IAccommodationRepository {
  async getAll(
    filter?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: Accommodation[]; rowsCount: number }> {
    let data: Accommodation[];
    let dataCount = 0;

    if (filter !== undefined) {
      data = await prisma.accommodation.findMany({
        orderBy: { id: "asc" },
        where: { title: { contains: filter } },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, title: true },
      });
      dataCount = Math.ceil(
        (await prisma.accommodation.count({
          where: { title: { contains: filter } },
        })) / limit
      );
    } else {
      data = await prisma.accommodation.findMany({
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, title: true },
      });
      dataCount = Math.ceil((await prisma.accommodation.count()) / limit);
    }

    return {
      data: data,
      rowsCount: dataCount,
    };
  }

  async getById(id: number): Promise<Accommodation | null> {
    return prisma.accommodation.findUnique({
      where: { id: id },
      select: { id: true, title: true },
    });
  }

  async create(data: {
    title: string;
  }): Promise<{ message: string; data: Accommodation }> {
    const result = await prisma.accommodation.create({
      data: data,
    });

    return { message: "Data inserted successfully", data: result };
  }

  async update(
    id: number,
    data: { title: string }
  ): Promise<{ message: string; data: Accommodation }> {
    const result = await prisma.accommodation_type.update({
      where: { id: id },
      data: data,
    });

    return { message: "Data updated successfully", data: result };
  }

  async delete(id: number): Promise<{ message: string; data: Accommodation }> {
    const result = await prisma.accommodation.delete({
      where: { id: id },
    });

    return { message: "Data deleted successfully", data: result };
  }
}
