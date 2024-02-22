import { PrismaClient, Province, accommodation_type } from "@prisma/client";

const prisma = new PrismaClient();

class AccommodationTypeModel {
  async getAll(
    filter?: string,
    page = 1,
    limit = 10
  ): Promise<{ data: accommodation_type[]; rowsCount: number }> {
    let data: accommodation_type[];
    let dataCount = 0;

    if (filter !== undefined) {
      data = await prisma.accommodation_type.findMany({
        orderBy: { id: "asc" },
        where: { title: { contains: filter } },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, title: true },
      });
      dataCount = Math.ceil(
        (await prisma.accommodation_type.count({
          where: { title: { contains: filter } },
        })) / limit
      );
    } else {
      data = await prisma.accommodation_type.findMany({
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
        select: { id: true, title: true },
      });
      dataCount = Math.ceil((await prisma.accommodation_type.count()) / limit);
    }

    return {
      data: data,
      rowsCount: dataCount,
    };
  }

  async getById(id: number): Promise<accommodation_type | null> {
    return prisma.accommodation_type.findUnique({
      where: { id: id },
      select: { id: true, title: true },
    });
  }

  async create(data: {
    title: string;
  }): Promise<{ message: string; data: accommodation_type }> {
    const result = await prisma.accommodation_type.create({
      data: data,
    });

    return { message: "Data inserted successfully", data: result };
  }

  async update(
    id: number,
    data: { title: string }
  ): Promise<{ message: string; data: accommodation_type }> {
    const result = await prisma.accommodation_type.update({
      where: { id: id },
      data: data,
    });

    return { message: "Data updated successfully", data: result };
  }

  async delete(
    id: number
  ): Promise<{ message: string; data: accommodation_type }> {
    const result = await prisma.accommodation_type.delete({
      where: { id: id },
    });

    return { message: "Data deleted successfully", data: result };
  }
}

export default AccommodationTypeModel;
