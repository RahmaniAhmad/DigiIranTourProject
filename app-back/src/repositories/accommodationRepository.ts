import { LIMIT } from "../config/const";
import prisma from "../config/dbPrisma";
import { IAccommodation } from "../interfaces/IAccommodation";
import { IAccommodationRepository } from "./contracts/IAccommodationRepository";

export class AccommodationRepository implements IAccommodationRepository {
  async getAll(
    filter?: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: IAccommodation[]; rowsCount: number }> {
    let data: IAccommodation[];
    let dataCount = 0;

    if (filter !== undefined) {
      data = await prisma.accommodation.findMany({
        orderBy: { id: "asc" },
        where: { title: { contains: filter } },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          title: true,
          accommodationTypeId: true,
          accommodationType: true,
          cityId: true,
          city: {
            select: {
              id: true,
              name: true,
              provinceId: true,
              province: true,
            },
          },
          address: true,
          bedroomsCount: true,
          bedsCount: true,
          capacity: true,
          imageName: true,
        },
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
        select: {
          id: true,
          title: true,
          accommodationTypeId: true,
          accommodationType: true,
          cityId: true,
          city: {
            select: {
              id: true,
              name: true,
              provinceId: true,
              province: true,
            },
          },
          address: true,
          bedroomsCount: true,
          bedsCount: true,
          capacity: true,
          imageName: true,
        },
      });
      dataCount = Math.ceil((await prisma.accommodation.count()) / limit);
    }

    return {
      data: data,
      rowsCount: dataCount,
    };
  }
  async getByType(
    type: string,
    page = 1,
    limit = LIMIT
  ): Promise<{ data: IAccommodation[]; rowsCount: number }> {
    let data: IAccommodation[];
    let dataCount = 0;

    data = await prisma.accommodation.findMany({
      orderBy: { id: "asc" },
      where: {
        accommodationType: {
          title: { equals: type },
        },
      },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        title: true,
        accommodationTypeId: true,
        accommodationType: true,
        cityId: true,
        city: {
          select: {
            id: true,
            name: true,
            provinceId: true,
            province: true,
          },
        },
        address: true,
        bedroomsCount: true,
        bedsCount: true,
        capacity: true,
        imageName: true,
      },
    });
    dataCount = Math.ceil(
      (await prisma.accommodation.count({
        where: {
          accommodationType: {
            title: { equals: type },
          },
        },
      })) / limit
    );

    return {
      data: data,
      rowsCount: dataCount,
    };
  }
  async getById(id: number): Promise<IAccommodation | null> {
    return prisma.accommodation.findUnique({
      where: { id: id },
      select: {
        id: true,
        title: true,
        accommodationTypeId: true,
        accommodationType: true,
        cityId: true,
        city: true,
        address: true,
        bedroomsCount: true,
        bedsCount: true,
        capacity: true,
        imageName: true,
      },
    });
  }

  async create(data: {
    title: string;
    accommodationTypeId: number;
    cityId: number;
    address: string;
    bedroomsCount: string;
    bedsCount: string;
    capacity: string;
    imageName: string;
  }): Promise<{ message: string; data: IAccommodation }> {
    try {
      const result = await prisma.accommodation.create({
        data: data,
      });

      return { message: "Data inserted successfully", data: result };
    } catch (error) {
      console.log(error);
      return { message: "Data inserted failed", data: null };
    }
  }

  async update(
    id: number,
    data: {
      title: string;
      accommodationTypeId: number;
      cityId: number;
      address: string;
      bedroomsCount: string;
      bedsCount: string;
      capacity: string;
      imageName: string;
    }
  ): Promise<{ message: string; data: IAccommodation }> {
    const result = await prisma.accommodation.update({
      where: { id: id },
      data: data,
    });

    return { message: "Data updated successfully", data: result };
  }

  async delete(id: number): Promise<{ message: string; data: IAccommodation }> {
    const result = await prisma.accommodation.delete({
      where: { id: id },
    });

    return { message: "Data deleted successfully", data: result };
  }
}
