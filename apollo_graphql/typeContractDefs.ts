import {gql} from "apollo-server";

export const typeDefs = gql`

type Contract {
  id: Int!
  name: String!
}

type Query {
  allUsers: [User!]!
}
`;
