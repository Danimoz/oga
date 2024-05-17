
export type orm = "mongoose" | "prisma" ;

export interface OgaConfig {
  orm: orm;
  instance: any;
  models?: any;
  params?: { admin?: string | string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}