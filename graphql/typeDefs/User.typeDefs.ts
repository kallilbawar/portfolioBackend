import { gql } from "apollo-server";

export const UsersTypeDefs = gql`

type User {
  id: Int!
  email: String 
  name: String!
  password: String!
}

extend type Query {
  allUsers: [User!]!
  getUser(id: Int!): User
  listUsers: [User!]!
 }

type Mutation{
  createUser(name: String!, email: String!, password: String! ): AuthPayLoad
  updateUser(id: Int!, name: String!, email: String!, password: String! ): User
  deleteUser(id: Int!): User
  loginUser(email: String!, password: String!): User
}

input Login{
  email: String!
  password: String!
}

type AuthPayLoad {
  token: String!
}

`;
