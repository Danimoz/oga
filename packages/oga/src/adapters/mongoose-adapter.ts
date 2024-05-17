import mongoose from "mongoose";
import { ModelAdapter, ModelDetails } from "./adapter";

export class MongooseAdapter implements ModelAdapter {
  private models: { [key: string]: mongoose.Model<any> };
  private mongooseInstance: typeof mongoose;

  constructor(mongooseInstance: typeof mongoose, models: { [key: string]: mongoose.Model<any> } = {}) {
    this.models = models;
    this.mongooseInstance = mongooseInstance;
  }

  async getModelByName(modelName: string) {
    return this.mongooseInstance.model(modelName);
  }

  async getAllModels() {
    return Object.keys(this.models);
  }

  async getModelDetails(modelName: string): Promise<ModelDetails> {
    const model = this.getModelByName(modelName);

    if (!model) {
      throw new Error(`Model ${modelName} not found`);
    }

    const schema = model.schema;
    const fields = schema.paths;

    const fieldDetails = Object.keys(fields).map((fieldName) => {
      const field = fields[fieldName];
      let fieldType: string;

      switch (field?.instance) {
        case "Number":
          fieldType = "number";
          break;
        case "Date":
          fieldType = "date";
          break;
        case "Boolean":
          fieldType = "checkbox";
          break;
        case "String":
          fieldType = fieldName.toLowerCase().includes("password") ? "password" 
            : fieldName.toLowerCase().includes("email") ? "email" 
            : fieldName.toLowerCase().includes("phone") ? "tel"
            : fieldName.toLowerCase().includes("url") ? "url"
            : fieldName.toLowerCase().includes("image") || fieldName.toLowerCase().includes('picture') ? "file"
            : "text";
          break;
        default:
          fieldType = "text";
      }

      return {
        name: fieldName,
        type: fieldType,
        required: !!field?.isRequired,
      };
    });
    
    return { fields: fieldDetails };
  }
}