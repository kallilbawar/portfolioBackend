import { client } from "../../prisma/client";

export const ContractsResolvers = {
  Query: {
    allContracts: () => {
      return client.contract.findMany({
        include : { user : true }
      });
    },
   
  },
}
