import { Request, Response } from "express";
import { User } from "../database/entities";

const getUserById = async (id: number) => {
  return await User.findOneBy({ id });
};

const getUserByIdWithRelations = async (id: number) => {
  return await User.createQueryBuilder("user")
    .leftJoinAndSelect("user.mails", "mails")
    .leftJoinAndSelect(
      "mails.accounts",
      "accounts",
      "mails.id = accounts.mailId"
    )
    .leftJoinAndSelect("accounts.type", "type", "type.id = accounts.typeId")
    .where("user.id = :id", { id })
    .getOne();
};

const getUser = async (request: Request, response: Response, option: any) => {
  const userFound = await getUserByIdWithRelations(parseInt(request.params?.id));
  return response.json(userFound);
};

const createUser = async (request: Request, response: Response) => {
  const { name, lastName } = request.body;

  const user = new User();
  user.name = name;
  user.lastName = lastName;
  user.save();

  return response.json(user);
};

const updateUser = async (request: Request, response: Response) => {
  // const { id } = req.params;
  const userFound = await getUserById(1);
  // userFound?.save({
  //   id:
  // });
  const userUpdated = await User.save({
    id: userFound?.id,
    ...request.body,
  });

  console.log(userUpdated);

  return response.json(userUpdated);
};

export { getUserById, getUser, createUser, updateUser };
