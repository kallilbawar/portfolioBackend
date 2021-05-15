
import { ApolloServer, gql } from "apollo-server";

import { UsersResolvers } from "./apollo_graphql/resolvers/Users.resolvers";
import { ContractsResolvers } from "./apollo_graphql/resolvers/Contracts.resolvers";
import { NotificationsResolvers } from "./apollo_graphql/resolvers/Notifications.resolvers";
import { MockUpsResolvers } from "./apollo_graphql/resolvers/MockUps.resolvers";
import { ProjetsResolvers } from "./apollo_graphql/resolvers/Projets.resolvers";
import { TasksResolvers } from "./apollo_graphql/resolvers/Tasks.resolvers";
import { BilingsResolvers } from "./apollo_graphql/resolvers/Bilings.resolvers";

import { UsersTypeDefs } from "./apollo_graphql/typeDefs/User.typeDefs";
import { ContractsTypeDefs } from "./apollo_graphql/typeDefs/Contracts.typeDefs";
import { NotificationsTypeDefs } from "./apollo_graphql/typeDefs/Notifications.typeDefs";
import { MockUpsTypeDefs } from "./apollo_graphql/typeDefs/MockUps.typeDefs";
import { ProjetsTypeDefs} from "./apollo_graphql/typeDefs/Projets.typeDefs";
import { TasksTypeDefs } from "./apollo_graphql/typeDefs/Tasks.typeDefs";
import { BilingsTypeDefs} from "./apollo_graphql/typeDefs/Bilings.typeDefs";






import { PrismaClient } from "@prisma/client";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [UsersTypeDefs, ContractsTypeDefs, NotificationsTypeDefs, MockUpsTypeDefs, ProjetsTypeDefs, TasksTypeDefs, BilingsTypeDefs],
  resolvers: [UsersResolvers, ContractsResolvers, NotificationsResolvers, MockUpsResolvers, ProjetsResolvers, TasksResolvers, BilingsResolvers],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.contract.create({
//     data: {
//       name: "Alice",
//       Number: 154454,
//       valid: true,
//       start_date: "1992-10-09T00:00:00Z",
//       end_date:"1992-10-09T00:00:00Z",
//       userId: 1
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
