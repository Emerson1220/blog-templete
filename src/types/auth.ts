import { User } from '@prisma/client';

export type AuthUser = Omit<User, 'password'> & {
  isAdmin?: boolean;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterData = {
  email: string;
  password: string;
  name: string;
};

export type AuthToken = {
  token: string;
  expiresIn: number;
};

export type AuthState = {
  user: AuthUser | null;
  token: AuthToken | null;
  isLoading: boolean;
  error: string | null;
};
