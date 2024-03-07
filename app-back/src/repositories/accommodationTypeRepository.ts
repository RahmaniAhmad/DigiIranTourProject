import { LIMIT } from "../config/const";
import prisma from "../config/dbPrisma";
import { IAccommodationType } from "../interfaces/IAccommodationType";
import { IAccommodationTypeRepository } from "./contracts/IAccommodationTypeRepository";

export class AccommodationTypeRepository
  implements IAccommodationTypeRepository
{
  async getAll(
    filter?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: IAccommodationType[]; rowsCount: number }> {
    let data: IAccommodationType[];
    let dataCount = 0;

    if (filter !== undefined) {
      data = await prisma.accommodationType.findMany({
        orderBy: { id: "asc" },
        where: { title: { contains: filter } },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, title: true },
      });
      dataCount = Math.ceil(
        (await prisma.accommodationType.count({
          where: { title: { contains: filter } },
        })) / limit
      );
    } else {
      data = await prisma.accommodationType.findMany({
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, title: true },
      });
      dataCount = Math.ceil((await prisma.accommodationType.count()) / limit);
    }

    return {
      data: data,
      rowsCount: dataCount,
    };
  }

  async getById(id: number): Promise<IAccommodationType | null> {
    return prisma.accommodationType.findUnique({
      where: { id: id },
      select: { id: true, title: true },
    });
  }

  async create(data: {
    title: string;
  }): Promise<{ message: string; data: IAccommodationType }> {
    const result = await prisma.accommodationType.create({
      data: data,
    });

    return { message: "Data inserted successfully", data: result };
  }

  async update(
    id: number,
    data: { title: string }
  ): Promise<{ message: string; data: IAccommodationType }> {
    const result = await prisma.accommodationType.update({
      where: { id: id },
      data: data,
    });

    return { message: "Data updated successfully", data: result };
  }

  async delete(
    id: number
  ): Promise<{ message: string; data: IAccommodationType }> {
    const result = await prisma.accommodationType.delete({
      where: { id: id },
    });

    return { message: "Data deleted successfully", data: result };
  }
}
