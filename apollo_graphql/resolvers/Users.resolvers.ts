import { client } from "../../prisma/client";

export const UsersResolvers = {
  Query: {
    allUsers: () => {
      return client.user.findMany();
    },
    getUser: (parent, args, context, info) => { 
      return client.user.findUnique({
        where:{id: args.id}
      });
    },
  
  
  },
}
