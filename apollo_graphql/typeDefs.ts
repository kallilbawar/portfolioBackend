import {gql} from "apollo-server";

export const typeDefs = gql`

type User {
  id: Int!
  email: String!
  name: String
}


type Query {
  allUsers: [User!]!

}
`;
