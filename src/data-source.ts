import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";

import dotenv from "dotenv";

dotenv.config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,

  logging: false,

  entities: [path.join(__dirname, "/entities/**/*.{ts,js}")],
  migrations: [path.join(__dirname, "/migrations/**/*.{ts,js}")],
});
