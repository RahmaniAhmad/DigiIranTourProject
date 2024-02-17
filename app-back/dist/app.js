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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const dbPrisma = require("./dbPrisma");
const app = (0, express_1.default)();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());
const prisma = new client_1.PrismaClient();
app.get("/api/province", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query.filter;
        const page = req.query.page ? parseInt(req.query.page) : 1;
        let resultPromise;
        let countPromise;
        if (filter !== undefined) {
            resultPromise = db.query(`SELECT * FROM "Province" WHERE "name" LIKE '${filter}%'  ORDER BY "Id" ASC LIMIT 2 OFFSET ${(page - 1) * 2}`);
            countPromise = db.query(`SELECT count(*) as "rowsCount" from "Province" WHERE "Name" LIKE '${filter}%'`);
        }
        else {
            resultPromise = db.query(`SELECT * FROM "Province" ORDER BY "Id" ASC LIMIT 2 OFFSET ${(page - 1) * 2}`);
            countPromise = db.query(`SELECT count(*) as "rowsCount" from "Province"`);
        }
        const [result, count] = yield Promise.all([resultPromise, countPromise]);
        res.json({
            data: result.rows,
            rowsCount: Math.ceil(count.rows[0].rowsCount / 2),
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}));
app.get("/api/province/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const query = `SELECT * FROM "Province" WHERE "Id"=${id}`;
    const result = yield db.query(query);
    res.json(result.rows[0]);
}));
app.get("/api/province1/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const province = yield prisma.province.findUnique({
        where: { id: Number(id) },
        select: { id: true, name: true },
    });
    res.json(province);
}));
app.post("/api/province", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const query = 'INSERT INTO "Province" ("name") VALUES ($1) RETURNING *';
    const values = [data.name];
    const result = yield db.query(query, values);
    res.json({ message: "Data inserted successfully", data: result.rows[0] });
}));
app.put("/api/province/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const query = `UPDATE "Province" SET "name"='${data.name}' WHERE "Id"=${id}`;
    const result = yield db.query(query);
    res.json({ message: "Data inserted successfully", data: result.rows[0] });
}));
app.delete("/api/province/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const query = `DELETE FROM "Province" WHERE "Id"=${id}`;
    const result = yield db.query(query);
    res.json({ message: "Data deleted successfully", data: result.rows[0] });
}));
app.use(cors);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map