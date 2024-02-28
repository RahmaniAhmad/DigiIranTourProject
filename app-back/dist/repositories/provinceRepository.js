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
exports.ProvinceRepository = void 0;
const dbPrisma_1 = __importDefault(require("../config/dbPrisma"));
const const_1 = require("../config/const");
class ProvinceRepository {
    getAll(filter, page = 1, limit = const_1.LIMIT) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            let dataCount = 0;
            if (filter !== undefined) {
                data = yield dbPrisma_1.default.province.findMany({
                    orderBy: { id: "asc" },
                    where: { name: { contains: filter } },
                    skip: (page - 1) * limit,
                    take: limit,
                    select: { id: true, name: true },
                });
                dataCount = Math.ceil((yield dbPrisma_1.default.province.count({
                    where: { name: { contains: filter } },
                })) / limit);
            }
            else {
                data = yield dbPrisma_1.default.province.findMany({
                    orderBy: { id: "asc" },
                    skip: (page - 1) * limit,
                    take: limit,
                    select: { id: true, name: true },
                });
                dataCount = Math.ceil((yield dbPrisma_1.default.province.count()) / limit);
            }
            return {
                data: data,
                rowsCount: dataCount,
            };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dbPrisma_1.default.province.findUnique({
                where: { id: id },
                select: { id: true, name: true },
            });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbPrisma_1.default.province.create({
                data: data,
            });
            return { message: "Data inserted successfully", data: result };
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbPrisma_1.default.province.update({
                where: { id: id },
                data: data,
            });
            return { message: "Data updated successfully", data: result };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbPrisma_1.default.province.delete({
                where: { id: id },
            });
            return { message: "Data deleted successfully", data: result };
        });
    }
}
exports.ProvinceRepository = ProvinceRepository;
//# sourceMappingURL=provinceRepository.js.map