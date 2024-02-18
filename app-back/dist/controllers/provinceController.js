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
const provinceService_1 = __importDefault(require("../services/provinceService"));
const provinceController = {
    getProvinces: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filter = req.query.filter;
            const limit = req.query.filter ? Number(req.query.filter) : 10;
            const page = req.query.page ? parseInt(req.query.page) : 1;
            const result = yield provinceService_1.default.getProvinces(filter, page, limit);
            res.json(result);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }),
    getProvinceById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        const result = yield provinceService_1.default.getProvinceById(id);
        res.json(result);
    }),
    createProvince: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        const result = yield provinceService_1.default.createProvince(data);
        res.json(result);
    }),
    updateProvince: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        const data = req.body;
        const result = yield provinceService_1.default.updateProvince(id, data);
        res.json(result);
    }),
    deleteProvince: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        const result = yield provinceService_1.default.deleteProvince(id);
        res.json(result);
    }),
};
exports.default = provinceController;
//# sourceMappingURL=provinceController.js.map