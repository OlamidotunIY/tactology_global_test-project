declare module 'cookie-parse';
declare namespace Express {
    export interface Request {
      user?: {
        username: string;
        sub: number;
      };
    }
  }