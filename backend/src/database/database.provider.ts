import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      try {
        const dataSource = new DataSource({
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT, 10) || 5432,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          synchronize: process.env.NODE_ENV === 'production' ? false : true, // Set to false in production
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        });

        await dataSource.initialize();
        console.log('Database connection established successfully');
        return dataSource;
      } catch (error) {
        console.error('Database connection failed:', error.message);
        throw error;
      }
    },
  },
];
