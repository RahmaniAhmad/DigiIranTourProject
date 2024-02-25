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
exports.ProvinceController = void 0;
const provinceService_1 = require("../services/provinceService");
class ProvinceController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const filter = req.query.filter;
                const limit = req.query.limit ? Number(req.query.limit) : 10;
                const page = req.query.page ? parseInt(req.query.page) : 1;
                const result = yield this.provinceService.getProvinces(filter, page, limit);
                res.json(result);
            }
            catch (err) {
                console.error(err);
                res.status(500).send("Internal Server Error");
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            const result = yield this.provinceService.getProvinceById(id);
            res.json(result);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const result = yield this.provinceService.createProvince(data);
            res.json(result);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            const data = req.body;
            const result = yield this.provinceService.updateProvince(id, data);
            res.json(result);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            const result = yield this.provinceService.deleteProvince(id);
            res.json(result);
        });
        this.provinceService = new provinceService_1.ProvinceService();
    }
}
exports.ProvinceController = ProvinceController;
//# sourceMappingURL=provinceController.js.map