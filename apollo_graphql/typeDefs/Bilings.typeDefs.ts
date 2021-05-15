import {gql} from "apollo-server";

export const BilingsTypeDefs = gql`

type Biling {
  id: Int!
  Number: Int!
  description: String
}

extend type Query {
  allBilings: [Biling!]!

}
`;
