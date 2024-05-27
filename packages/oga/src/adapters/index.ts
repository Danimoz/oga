import { PrismaClient } from "@prisma/client";
import { orm } from "../types";
import { MongooseAdapter } from "./mongoose-adapter";
import { PrismaAdapter } from "./prisma-adapter";

export function getAdapter(orm: orm, instance?: any, models?: any) {
  switch (orm) {
    case "mongoose":
      if (!models) {
        throw new Error("Models are required for mongoose adapter");
      }
      return new MongooseAdapter(models);
    case "prisma":
      if (!instance) {
        throw new Error("Prisma instance is required for prisma adapter");
      }
      return new PrismaAdapter(instance as PrismaClient);
    default:
      throw new Error(`Unsupported ORM ${orm}`);
  }
}