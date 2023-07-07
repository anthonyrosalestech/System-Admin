// import express from "express";
// import morgan from "morgan";
// import cors from "cors";
import { userRouter, mailRouter, accountRouter } from "../routes";

// const Server = express();

// Server.use(morgan("dev"));
// Server.use(cors());
// Server.use(express.json());
// Server.use(express.urlencoded({ extended: true }));
// Server.use(userRouter);

// export { Server };


import bodyParser from "body-parser";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import "reflect-metadata";

// import authorsRoutes from "./routes/author";
// import booksRoutes from "./routes/book";
// import { ErrorHandler } from "./utils/Errorhandler";
import { ErrorHandler } from "../utils";

const Server: Express = express();

Server.use(cors());
Server.use(bodyParser.json());

// app.use("/authors", ErrorHandler.handleErrors(authorsRoutes));
Server.use("/users", ErrorHandler.handleErrors(userRouter));
Server.use("/mails", ErrorHandler.handleErrors(mailRouter));
Server.use("/accounts", ErrorHandler.handleErrors(accountRouter));

Server.all("*", (req: Request, res: Response) => {
  return res.status(404).send({
    success: false,
    message: "Invalid route",
  });
});

// Define a middleware function to handle errors
Server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).send({
    success: false,
    message: "Internal server error",
  });
});

export { Server };

