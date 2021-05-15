import { client } from "../../prisma/client";

export const UsersResolvers = {
  Query: {
    allUsers: () => {
      return client.user.findMany();
    },
  
  },
}
