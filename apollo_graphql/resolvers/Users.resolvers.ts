import IO from "../../api/IOGraphQL";
import { client } from "../../prisma/client";
import userApi from '../../api/UserApi';
import IOGraphQL from "../../api/IOGraphQL";
import { REGISTER_INSTANCE } from "ts-node";

const gqlHandler = (endpointHandler) => (parent, args, context, info) => {
    const io = new IOGraphQL({
      args : args,
    });
    const response = endpointHandler(io);
    return io.writeOutput(response);
};

export const UsersResolvers = {
  Query: {

    listUsers : gqlHandler(userApi.listUsers),
    
    getUser: gqlHandler(userApi.getUser),
  },

  Mutation: {
    
    createUser: gqlHandler(userApi.createUser),

    updateUser: (parent, args, context, info) => {},
    deleteUser: (parent, args, context, info) => {
      return client.user.delete({
        where:{id: args.id}
      })
    },
    loginUser: (parent, args, context, info) => {
      console.log(args.email);
    },
  },
};
