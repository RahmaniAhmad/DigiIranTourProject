"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
let db;
if (process.env.NODE_ENV === "production") {
    db = new client_1.PrismaClient();
}
else {
    if (!global.prisma) {
        global.prisma = new client_1.PrismaClient();
    }
    db = global.prisma;
}
exports.default = db;
//# sourceMappingURL=dbPrisma.js.map