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
const accommodationTypeModel_1 = __importDefault(require("../models/accommodationTypeModel"));
const model = new accommodationTypeModel_1.default();
const provinceService = {
    getAll: (filter, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
        return model.getAll(filter, page, limit);
    }),
    getById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return model.getById(id);
    }),
    create: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return model.create(data);
    }),
    update: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return model.update(id, data);
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return model.delete(id);
    }),
};
exports.default = provinceService;
//# sourceMappingURL=accommodationTypeService.js.map