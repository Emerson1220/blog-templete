export type ApiError = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

export type ApiHeaders = {
  'Content-Type': string;
  Authorization?: string;
  [key: string]: string | undefined;
};

export type ApiRequestConfig = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: ApiHeaders;
  body?: Record<string, unknown>;
  query?: Record<string, string>;
};

export type ApiEndpoint = {
  path: string;
  method: ApiRequestConfig['method'];
  protected?: boolean;
  rateLimit?: {
    windowMs: number;
    max: number;
  };
};
