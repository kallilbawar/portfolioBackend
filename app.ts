/*var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var {resolvers} = require("./graphql/resolvers") ;
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
 type Query {
  allUsers: [User!]!
}
`);
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
// app.get('/list', userAPI.List.bind(userAPI));
// app.get('/list', userAPI.Delete.bind(userAPI));

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.create({
//     data: {
//       name: "Alice",
//       email: "alice@prisma.io",
//       valid: true,
//       password: "totototo",
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

*/