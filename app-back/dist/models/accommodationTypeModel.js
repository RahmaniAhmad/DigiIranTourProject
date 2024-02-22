"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AccommodationTypeModel {
    getAll(filter, page = 1, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            let dataCount = 0;
            if (filter !== undefined) {
                data = yield prisma.accommodation_type.findMany({
                    orderBy: { id: "asc" },
                    where: { title: { contains: filter } },
                    skip: (page - 1) * limit,
                    take: limit,
                    select: { id: true, title: true },
                });
                dataCount = Math.ceil((yield prisma.accommodation_type.count({
                    where: { title: { contains: filter } },
                })) / limit);
            }
            else {
                data = yield prisma.accommodation_type.findMany({
                    orderBy: { id: "asc" },
                    skip: (page - 1) * limit,
                    take: limit,
                    select: { id: true, title: true },
                });
                dataCount = Math.ceil((yield prisma.accommodation_type.count()) / limit);
            }
            return {
                data: data,
                rowsCount: dataCount,
            };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.accommodation_type.findUnique({
                where: { id: id },
                select: { id: true, title: true },
            });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prisma.accommodation_type.create({
                data: data,
            });
            return { message: "Data inserted successfully", data: result };
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prisma.accommodation_type.update({
                where: { id: id },
                data: data,
            });
            return { message: "Data updated successfully", data: result };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prisma.accommodation_type.delete({
                where: { id: id },
            });
            return { message: "Data deleted successfully", data: result };
        });
    }
}
exports.default = AccommodationTypeModel;
//# sourceMappingURL=accommodationTypeModel.js.map