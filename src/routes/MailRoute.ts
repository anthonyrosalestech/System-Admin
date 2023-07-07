import { Router } from "express";
import { MailController } from "../controllers";

const mailRouter = Router();

mailRouter.get("/:id", MailController.getMail);
mailRouter.post("/", MailController.createMail);
mailRouter.post("/many", MailController.createManyMail);
mailRouter.put("/:id", MailController.updateMail);

export default mailRouter;
