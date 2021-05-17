import IO from "./IO";
import userRepo from "../repository/UserRepository";

export default {
  // GraphQL needs promise
  // Rest needs, HTTP status code

  listUsers: (io: IO): Promise<any> => {
    // Output
    return userRepo.getAllUsers();
  },

  getUser: (io: IO): Promise<any> => {
    // Input
    const userID: number = io.getInput("id");

    // Output
    return userRepo.getOneUser(userID);
  },

  createUser: (io: IO): Promise<any> => {

    //Input
    const nameID: string = io.getInput("name");
    const emailID: string = io.getInput("email");
    const passwordID: string = io.getInput("password");

    //Data

    //Output
    return userRepo.createUser(nameID, emailID, passwordID);
  },
  
  deleteUser : (io: IO): Promise<any> =>{
    
    const ID: number = io.getInput("id");
    return userRepo.deleteUser(ID);
  }

};
