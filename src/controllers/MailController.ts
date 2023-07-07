import { Request, Response } from "express";
import { User, Mail } from "../database/entities";
import { getUserById } from "./UserController";

const getMailById = async (id: any) => {
  return await Mail.findOneBy({ id: parseInt(id) });
};

const getMail = async (request: Request, response: Response, option: any) => {
  const userFound = await getMailById(parseInt(request.params?.id));
  return response.json(userFound);
};

const createMail = async (request: Request, response: Response) => {
  const { mail, userId } = request.body;

  const userFound = await getUserById(userId);
  if (!userFound) {
    return;
  }

  const createdMail = new Mail();
  createdMail.mail = mail;
  createdMail.user = userFound;
  createdMail.save();

  return response.json(mail);
};

const createManyMail = async (request: Request, response: Response) => {
  const { mails, userId } = request.body;

  const userFound = await getUserById(userId);
  if (!userFound) {
    return;
  }

  let arrayMails: Mail[] = [];
  mails.forEach(async (mail: Mail) => {
    const createdMail = new Mail();
    createdMail.mail = mail.mail;
    createdMail.user = userFound;
    await createdMail.save();
    arrayMails.push(createdMail);
  });

  return response.json({ mails: arrayMails });
};

const updateMail = async (request: Request, response: Response) => {
  const { id } = request.params;
  const userFound = await getMailById(id);
  const userUpdated = await Mail.save({
    id: userFound?.id,
    ...request.body,
  });

  console.log(userUpdated);

  return response.json(userUpdated);
};

export { getMail, createMail, createManyMail, updateMail };
