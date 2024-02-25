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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccommodationTypeService = void 0;
const dbPrisma_1 = __importDefault(require("../config/dbPrisma"));
class AccommodationTypeService {
    getAll(filter, page = 1, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            let dataCount = 0;
            if (filter !== undefined) {
                data = yield dbPrisma_1.default.accommodation_type.findMany({
                    orderBy: { id: "asc" },
                    where: { title: { contains: filter } },
                    skip: (page - 1) * limit,
                    take: limit,
                    select: { id: true, title: true },
                });
                dataCount = Math.ceil((yield dbPrisma_1.default.accommodation_type.count({
                    where: { title: { contains: filter } },
                })) / limit);
            }
            else {
                data = yield dbPrisma_1.default.accommodation_type.findMany({
                    orderBy: { id: "asc" },
                    skip: (page - 1) * limit,
                    take: limit,
                    select: { id: true, title: true },
                });
                dataCount = Math.ceil((yield dbPrisma_1.default.accommodation_type.count()) / limit);
            }
            return {
                data: data,
                rowsCount: dataCount,
            };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dbPrisma_1.default.accommodation_type.findUnique({
                where: { id: id },
                select: { id: true, title: true },
            });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbPrisma_1.default.accommodation_type.create({
                data: data,
            });
            return { message: "Data inserted successfully", data: result };
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbPrisma_1.default.accommodation_type.update({
                where: { id: id },
                data: data,
            });
            return { message: "Data updated successfully", data: result };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbPrisma_1.default.accommodation_type.delete({
                where: { id: id },
            });
            return { message: "Data deleted successfully", data: result };
        });
    }
}
exports.AccommodationTypeService = AccommodationTypeService;
//# sourceMappingURL=accommodationTypeService.js.map