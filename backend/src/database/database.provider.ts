import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV === 'production' ? false : true, // Set to false in production
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
});

// Use this for NestJS DI system
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
      }
      console.log('Database connection established successfully');
      return AppDataSource;
    },
  },
];
