import { Prisma } from '@prisma/client';

export type DatabaseConfig = {
  url: string;
  ssl?: boolean;
  logging?: boolean;
  timezone?: string;
};

export type DatabaseModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type DatabaseQuery<Model extends Prisma.ModelName> = {
  where?: Prisma.Args<Model, 'findMany'>['where'];
  select?: Prisma.Args<Model, 'findMany'>['select'];
  include?: Prisma.Args<Model, 'findMany'>['include'];
  orderBy?: Prisma.Args<Model, 'findMany'>['orderBy'];
  skip?: number;
  take?: number;
};

export type DatabaseTransaction = Prisma.TransactionClient;

export type DatabaseError = {
  code: string;
  message: string;
  meta?: Record<string, unknown>;
};
