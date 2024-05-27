
export type orm = "mongoose" | "prisma" ;

export interface OgaConfig {
  orm: orm;
  instance?: any;
  models?: any;
  params?: { admin?: string | string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export type ServerAction<T> = ((data: T) => Promise<void>) & Function;

export interface FieldDetails {
  name: string;
  type: string;
  required: boolean;
}

export interface FormValues {
  [key: string]: string | File | null;
}