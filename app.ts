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

*/