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
exports.ProvinceService = void 0;
const const_1 = require("../config/const");
class ProvinceService {
    constructor(repository) {
        this.provinceRepository = repository;
    }
    getAll(filter, page = 1, limit = const_1.LIMIT) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provinceRepository.getAll(filter, page, limit);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provinceRepository.getById(id);
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provinceRepository.create(data);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provinceRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provinceRepository.delete(id);
        });
    }
}
exports.ProvinceService = ProvinceService;
//# sourceMappingURL=provinceService.js.map