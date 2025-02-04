import 'dotenv/config';

import { DataSource } from 'typeorm';
import { Employee } from './entities/employee.entity.js';
import { User } from './entities/user.entity.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Employee, User],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false, // For self-signed certificates
  },
  // logging: true,
});
