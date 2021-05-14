import { client } from "../prisma/client";

export const resolvers = {
  Query: {
    allUsers: () => {
      return client.user.findMany();
    },
  
  },
}
