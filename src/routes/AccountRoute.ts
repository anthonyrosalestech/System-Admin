import { Router } from "express";
import { AccountController } from "../controllers";

const accountRouter = Router();

accountRouter.post("/", AccountController.createAccount);

export default accountRouter;
