export * from './api';
export * from './auth';
export * from './database';

// Types globaux
export type Metadata = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
};

export type PaginationParams = {
  page: number;
  limit: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
  status: number;
  success: boolean;
};
