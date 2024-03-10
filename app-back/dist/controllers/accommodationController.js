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
exports.AccommodationController = void 0;
const const_1 = require("../config/const");
const accommodationService_1 = require("../services/accommodationService");
const accommodationMapper_1 = __importDefault(require("../mappers/accommodationMapper"));
class AccommodationController {
    constructor(repository) {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const filter = req.query.filter;
                const limit = req.query.limit ? Number(req.query.limit) : const_1.LIMIT;
                const page = req.query.page ? parseInt(req.query.page) : 1;
                const result = yield this.accommodationService.getAll(filter, page, limit);
                res.json({
                    data: result.data.map(accommodationMapper_1.default.mapToTableViewModel),
                    rowsCount: result.rowsCount,
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).send("Internal Server Error");
            }
        });
        this.getByType = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const type = req.params.type;
                console.log(type);
                const limit = req.query.limit ? Number(req.query.limit) : const_1.LIMIT;
                const page = req.query.page ? parseInt(req.query.page) : 1;
                const result = yield this.accommodationService.getByType(type, page, limit);
                res.json({
                    data: result.data.map(accommodationMapper_1.default.mapToTableViewModel),
                    rowsCount: result.rowsCount,
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).send("Internal Server Error");
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            const result = yield this.accommodationService.getById(id);
            res.json(accommodationMapper_1.default.mapToViewModel(result));
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const result = yield this.accommodationService.create(data);
            res.json(result);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            const data = req.body;
            const result = yield this.accommodationService.update(id, data);
            res.json(result);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            const result = yield this.accommodationService.delete(id);
            res.json(result);
        });
        this.accommodationService = new accommodationService_1.AccommodationService(repository);
    }
}
exports.AccommodationController = AccommodationController;
//# sourceMappingURL=accommodationController.js.map