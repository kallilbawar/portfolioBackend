import * as express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from 'graphql';
import {resolvers} from './graphql/resolvers';
import { PrismaClient } from '@prisma/client'
import { makeExecutableSchema } from '@graphql-tools/schema';

const app = express();

const typeDefs = `
  type User {
    email: String!
    name: String
  }
  type Query {
    allUsers: [User!]!
  }
`;


export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Running...');
});





// app.get('/list', userAPI.List.bind(userAPI));
// app.get('/list', userAPI.Delete.bind(userAPI));
/*
 const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
        valid: true,
        password: 'totototo'
       
      }
    })

  }

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
*/  