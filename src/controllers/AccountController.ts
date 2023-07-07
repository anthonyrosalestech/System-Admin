import { Request, Response } from "express";
import { Account, Mail } from "../database/entities";
import { Type } from "../database/entities/Type";

const createAccount = async (request: Request, response: Response) => {
  const { userName, password, mailId, typeId } = request.body;
  const mail = await Mail.findOneBy({ id: parseInt(mailId) })
  const type = await Type.findOneBy({id: parseInt(typeId)});
  if(!mail || !type){
    return;
  }
  
  const account = new Account();
  account.userName = userName;
  account.password = password;
  account.mail = mail;
  account.type = type;
  account.save();

  return response.json(account);
};

export { createAccount };
