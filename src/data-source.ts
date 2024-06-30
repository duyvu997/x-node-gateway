import 'dotenv/config';

import { DataSource } from 'typeorm';
import { User } from '../entity/User.js'; // Adjust the import path as necessary

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User], // Add your entities here
  synchronize: true, // Set to false in production
});
