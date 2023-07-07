import "reflect-metadata";
import * as dotenv from "dotenv";
import { AppDataSource, Server } from "./config";

dotenv.config();
const PORT = process.env.APP_PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection success");
  })
  .catch((err: any) => console.log(err));

Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
