import { client } from "../../prisma/client";

export const BilingsResolvers = {
  Query: {
    allBilings: () => {
      return client.biling.findMany();
    },
   
  },
}
