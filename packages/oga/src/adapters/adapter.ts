import { FieldDetails } from "../types";

export interface ModelAdapter {
  getModelByName(modelName: string): any;
  getAllModels(): Promise<string[]>;
  getModelDetails(modelName: string): Promise<ModelDetails>;
}


export interface ModelDetails {
  fields: FieldDetails[];
}