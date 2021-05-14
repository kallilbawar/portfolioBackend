import { resolvers } from "./apollo_graphql/resolvers";
import { typeDefs } from "./apollo_graphql/typeDefs";
import { ApolloServer, gql} from "apollo-server";
import { PrismaClient } from '@prisma/client';



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

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

