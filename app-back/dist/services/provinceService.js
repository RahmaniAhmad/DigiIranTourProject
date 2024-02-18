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
const provinceModel_1 = __importDefault(require("../models/provinceModel"));
const provinceModel = new provinceModel_1.default();
const provinceService = {
    getProvinces: (filter, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
        return provinceModel.getProvinces(filter, page, limit);
    }),
    getProvinceById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return provinceModel.getProvinceById(id);
    }),
    createProvince: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return provinceModel.createProvince(data);
    }),
    updateProvince: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return provinceModel.updateProvince(id, data);
    }),
    deleteProvince: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return provinceModel.deleteProvince(id);
    }),
};
exports.default = provinceService;
//# sourceMappingURL=provinceService.js.map