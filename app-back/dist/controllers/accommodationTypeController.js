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
const accommodationTypeService_1 = __importDefault(require("../services/accommodationTypeService"));
const accommodationTypeController = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filter = req.query.filter;
            const limit = req.query.limit ? Number(req.query.limit) : 10;
            const page = req.query.page ? parseInt(req.query.page) : 1;
            const result = yield accommodationTypeService_1.default.getAll(filter, page, limit);
            res.json(result);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }),
    getById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        const result = yield accommodationTypeService_1.default.getById(id);
        res.json(result);
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        const result = yield accommodationTypeService_1.default.create(data);
        res.json(result);
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        const data = req.body;
        const result = yield accommodationTypeService_1.default.update(id, data);
        res.json(result);
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        const result = yield accommodationTypeService_1.default.delete(id);
        res.json(result);
    }),
};
exports.default = accommodationTypeController;
//# sourceMappingURL=accommodationTypeController.js.map