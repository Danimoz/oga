import { PrismaClient } from "@prisma/client";
import { orm } from "../types";
import { MongooseAdapter } from "./mongoose-adapter";
import { PrismaAdapter } from "./prisma-adapter";
import mongoose from "mongoose";

export function getAdapter(orm: orm, instance: any, models?: any) {
  switch (orm) {
    case "mongoose":
      return new MongooseAdapter(instance as typeof mongoose, models);
    case "prisma":
      return new PrismaAdapter(instance as PrismaClient);
    default:
      throw new Error(`Unsupported ORM ${orm}`);
  }
}