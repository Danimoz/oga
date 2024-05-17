export interface ModelAdapter {
  getModelByName(modelName: string): any;
  getAllModels(): Promise<string[]>;
  getModelDetails(modelName: string): Promise<ModelDetails>;
}

export interface FieldDetails {
  name: string;
  type: string;
  required: boolean;
}

export interface ModelDetails {
  fields: FieldDetails[];
}