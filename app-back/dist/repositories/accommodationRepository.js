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
exports.AccommodationRepository = void 0;
const const_1 = require("../config/const");
const dbPrisma_1 = __importDefault(require("../config/dbPrisma"));
class AccommodationRepository {
    getAll(filter, page = 1, limit = const_1.LIMIT) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            let dataCount = 0;
            if (filter !== undefined) {
                data = yield dbPrisma_1.default.accommodation.findMany({
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
                dataCount = Math.ceil((yield dbPrisma_1.default.accommodation.count({
                    where: { title: { contains: filter } },
                })) / limit);
            }
            else {
                data = yield dbPrisma_1.default.accommodation.findMany({
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
                dataCount = Math.ceil((yield dbPrisma_1.default.accommodation.count()) / limit);
            }
            return {
                data: data,
                rowsCount: dataCount,
            };
        });
    }
    getByType(type, page = 1, limit = const_1.LIMIT) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            let dataCount = 0;
            data = yield dbPrisma_1.default.accommodation.findMany({
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
            dataCount = Math.ceil((yield dbPrisma_1.default.accommodation.count({
                where: {
                    accommodationType: {
                        title: { equals: type },
                    },
                },
            })) / limit);
            return {
                data: data,
                rowsCount: dataCount,
            };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dbPrisma_1.default.accommodation.findUnique({
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
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield dbPrisma_1.default.accommodation.create({
                    data: data,
                });
                return { message: "Data inserted successfully", data: result };
            }
            catch (error) {
                return { message: "Data inserted failed", data: null };
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("222222222222: ", data);
            const result = yield dbPrisma_1.default.accommodation.update({
                where: { id: id },
                data: data,
            });
            return { message: "Data updated successfully", data: result };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbPrisma_1.default.accommodation.delete({
                where: { id: id },
            });
            return { message: "Data deleted successfully", data: result };
        });
    }
}
exports.AccommodationRepository = AccommodationRepository;
//# sourceMappingURL=accommodationRepository.js.map