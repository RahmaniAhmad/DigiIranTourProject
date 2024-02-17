import { PrismaClient } from "@prisma/client";

interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

let db: PrismaClient;

declare const global: CustomNodeJsGlobal;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  db = global.prisma;
}

export default db;
