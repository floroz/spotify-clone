import { PrismaClient } from "@prisma/client";
/**
 * Fix Connection Error Prisma
 * https://flaviocopes.com/nextjs-fix-prismaclient-unable-run-browser/
 */
let db;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  db = global.prisma;
}
export const prisma = db as PrismaClient;
