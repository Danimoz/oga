import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
});

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true, maxLength: 32 }
});

export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
