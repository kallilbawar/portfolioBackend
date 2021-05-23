import IO from "./IO";
import * as Joi from "joi";
import userRepo from "../repository/UserRepository";
import * as bcrypt from "bcrypt";
import { UserInputError } from "apollo-server";
import * as jwt from "jsonwebtoken";

export default {
  // GraphQL needs promise
  // Rest needs, HTTP status code

  listUsers: async (io: IO): Promise<any> => {
    // Output
    return userRepo.getAllUsers();
  },

  getUser: (io: IO): Promise<any> => {
    // Input
    const userID: number = io.getInput("id");

    // Output
    return userRepo.getOneUser(userID);
  },

  createUser: async (io: IO): Promise<any> => {
    //Input
    const nameID: string = io.getInput("name");
    const emailID: string = io.getInput("email");
    const passwordID: string = io.getInput("password");

    //Data
    const schema = Joi.object({
      nameID: Joi.string().max(15),
      emailID: Joi.string().email(),
      passwordID: Joi.string().min(8),
    });

    const { value, error } = schema.validate({
      nameID: nameID,
      emailID: emailID,
      passwordID: bcrypt.hashSync(passwordID, 3),
    });

    if (error) throw new UserInputError("failed to create user");

    return userRepo.createUser(value);
  },

  deleteUser: async (io: IO): Promise<any> => {
    const ID: number = io.getInput("id");
    return userRepo.deleteUser(ID);
  },

  updateUser : async (io: IO): Promise<any> => {

 //Input
 const ID: string = io.getInput("id");
 const nameID: string = io.getInput("name");
 const emailID: string = io.getInput("email");
 const passwordID: string = io.getInput("password");

 //Data
 const schema = Joi.object({
   ID: Joi.number(),
   nameID: Joi.string().max(15),
   emailID: Joi.string().email(),
   passwordID: Joi.string().min(8),
 });

 const { value, error } = schema.validate({
   ID: ID,
   nameID: nameID,
   emailID: emailID,
   passwordID: bcrypt.hashSync(passwordID, 3),
 });

 if (error) throw new UserInputError("failed to create user");

 return userRepo.updateUser(value);

  },

  login: async (io: IO): Promise<any> => {
    const emailID: string = io.getInput("email");
    const passwordID: string = io.getInput("password");

    const user = userRepo.getOneUserByEmail(emailID);
    
    console.log((await user).email);
    if (!(await user).email) throw new UserInputError("failed to create user");
    const isMatch = bcrypt.compareSync(passwordID, (await user).password);
    if (!isMatch) throw new Error("failed password");

    return { token: jwt.sign(user, "supersecret") };
  },
};
