import { PrismaClient } from '@prisma/client';
import { ModelAdapter } from './adapter';

export class PrismaAdapter implements ModelAdapter {
  private readonly prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient
  }

  getModelByName(modelName: string) {
    return this.prismaClient.model(modelName);
  }

  getAllModels() {
    return this.prismaClient.modelNames();
  }

  getModelDetails() {
    // pass
    return Promise.resolve({ fields: [] });
  }
}
