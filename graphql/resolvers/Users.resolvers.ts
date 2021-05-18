import userApi from "../../api/UserApi";
import IOGraphQL from "../../api/IOGraphQL";

const gqlHandler = (endpointHandler) => (parent, args, context, info) => {
  const io = new IOGraphQL({
    args: args,
  });
  const response = endpointHandler(io);
  return io.writeOutput(response);
};

export const UsersResolvers = {
  Query: {
    listUsers: gqlHandler(userApi.listUsers),
    getOneUserByEmail: gqlHandler(userApi.login),
    getUser: gqlHandler(userApi.getUser),
  },

  Mutation: {
    createUser: gqlHandler(userApi.createUser),
    updateUser: gqlHandler(userApi.createUser),
    deleteUser: gqlHandler(userApi.deleteUser),
  },
};
