import { client } from "../../prisma/client";

export const ProjetsResolvers = {
  Query: {
    allProjets: () => {
      return client.projet.findMany();
    },
   
  },
}
