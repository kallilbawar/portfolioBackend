import { ApolloServer, gql } from "apollo-server";
import * as Resolvers from "./apollo_graphql/resolvers";
import * as TypeDefs from  "./apollo_graphql/typeDefs";
import { PrismaClient } from "@prisma/client";

const typeDefs = {}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({

  typeDefs: [
    TypeDefs.UsersTypeDefs,
    TypeDefs.ContractsTypeDefs,
    TypeDefs.NotificationsTypeDefs,
    TypeDefs.MockUpsTypeDefs,
    TypeDefs.ProjetsTypeDefs,
    TypeDefs.TasksTypeDefs,
    TypeDefs.BilingsTypeDefs,
  ],
  resolvers: [
    Resolvers.UsersResolvers,
    Resolvers.ContractsResolvers,
    Resolvers.NotificationsResolvers,
    Resolvers.MockUpsResolvers,
    Resolvers.ProjetsResolvers,
    Resolvers.TasksResolvers,
    Resolvers.BilingsResolvers,
  ],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


// const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.create({
//     data: {
//       name: "tohto",
//       email: "totho@gmail.com",
//       valid: true,
//       password: "jhfjfjgjgjgj"
//     },
//   });
//   await prisma.contract.create({
//     data: {
//       name: "rrrr",
//       number: 1584549,
//       valid: true,
//       start_date: "1992-10-09T00:00:00Z",
//       end_date:"1992-10-09T00:00:00Z",
//       userId: 2
//     },
//   });
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
