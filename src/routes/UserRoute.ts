import { Router } from "express";
import { UserController } from "../controllers";

const userRouter = Router();

userRouter.post("/", UserController.createUser);
userRouter.get("/:id", UserController.getUser);
userRouter.put("/:id", UserController.updateUser);

export default userRouter;
