// ormconfig.ts
import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: ['dist/entity/**/*.js'],
  migrations: ['dist/migration/**/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
};

export default config;
