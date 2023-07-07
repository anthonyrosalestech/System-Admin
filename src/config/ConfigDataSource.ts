import * as dotenv from "dotenv"
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "127.0.0.1",
  username: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "root",
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_DATABASE || "bookie",
  entities: [__dirname.substring(0, __dirname.indexOf("config")) + "/database/entities/**/*.ts"],
  logging: true,
  synchronize: true,
  subscribers: [],
});

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   username: "anthonyrosales",
//   password: "",
//   port: 5432,
//   database: "systemadmin",
//   entities: [__dirname.substring(0, __dirname.indexOf("config")) + "/database/entities/**/*.ts"],
//   logging: true,
//   synchronize: false ,
// });
