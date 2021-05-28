import IO from "./IO";
import * as Joi from "joi";
import ContractRepo from "../repository/ContractRepository";
import { UserInputError } from "apollo-server";



export default {
  // GraphQL needs promise
  // Rest needs, HTTP status code

  listContracts: async (io: IO): Promise<any> => {
    // Output
    return await ContractRepo.getAllContracts();
  },

  getContract: (io: IO): Promise<any> => {
    // Input
    const ContractID: number = io.getInput("id");

    // Output
    return ContractRepo.getOneContract(ContractID);
  },

  createContract: async (io: IO): Promise<any> => {

    //Input
    const number: string = io.getInput("number");
    const name: string = io.getInput("name");
    const start_date: Date = io.getInput("start_date");
    const end_date: Date = io.getInput("end_date");
    const userId: number = io.getInput("userId");

    //Data
    const schema = Joi.object({
      number: Joi.number().min(5),
      name: Joi.string().min(5),
      start_date: Joi.date(),
      end_date: Joi.date(),
      userId: Joi.number(),
    });

    const { value, error } = schema.validate({
      number: number,
      name: name,
      start_date: start_date,
      end_date: end_date,
      userId: userId,
    });

    
    if (error) throw new UserInputError("failed to create Contract");

    return ContractRepo.createContract(value);
  },

  deleteContract: async (io: IO): Promise<any> => {
    const ID: number = io.getInput("id");
    return ContractRepo.deleteContract(ID);
  },

  updateContract: async (io: IO): Promise<any> => {
    //Input
    const ID: string = io.getInput("id");
    const number: string = io.getInput("number");
    const name: string = io.getInput("name");
    const start_date: Date = io.getInput("start_date");
    const end_date: Date = io.getInput("end_date");
    const userId: number = io.getInput("userId");

    //Data
    const schema = Joi.object({
      ID: Joi.number(),
      number: Joi.number().min(5),
      name: Joi.string().min(5),
      start_date: Joi.date(),
      end_date: Joi.date(),
      userId: Joi.number(),
    });

    const { value, error } = schema.validate({
      ID: ID,
      number: number,
      name: name,
      start_date: start_date,
      end_date: end_date,
      userId: userId,
    });


    if (error) throw new UserInputError("failed to update Contract");

    return ContractRepo.updateContract(value);
  },
};
