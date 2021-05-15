import {gql} from "apollo-server";

export const BilingsTypeDefs = gql`

type Biling {
  id: Int!
  number: Int!
  description: String!
  date: String!
  userId: User!
}

extend type Query {
  allBilings: [Biling!]!
}
`;
