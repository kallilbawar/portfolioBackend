import {gql} from "apollo-server";

export const UsersTypeDefs = gql`

type User {
  id: Int!
  email: String
  name: String!
}


extend type Query {
  allUsers: [User!]!
  getUser(id: Int!): User
  
}
`;
