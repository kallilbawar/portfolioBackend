import IO from "./IO";
import * as Joi from "joi";
import userRepo from "../repository/UserRepository";
import { any } from "joi";
import bcrypt from "bcrypt";
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
      passwordID: Joi.string().min(8)
    });

    const { value, error } = schema.validate({ nameID: nameID, emailID: emailID, passwordID: passwordID });

    if (error) throw new UserInputError("failed to create user");

    //console.log(value.nameID);
    
    //const passwordCrypt = bcrypt.hashSync(passwordID, 3)
    
     const user =userRepo.createUser(value);
     
     return {
       token : jwt.sign(user, "supersecret")
      };
  },

  deleteUser: (io: IO): Promise<any> => {
    const ID: number = io.getInput("id");
    return userRepo.deleteUser(ID);
  },
  
};
