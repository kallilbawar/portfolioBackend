import { client } from "../../prisma/client";

export const MockUpsResolvers = {
  Query: {
    allMockUps: () => {
      return client.mockUp.findMany();
    },
   
  },
}
