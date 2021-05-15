import {gql} from "apollo-server";

export const ProjetsTypeDefs = gql`

type Projet {
  id: Int!
  Number: Int!
  description: String
}

extend type Query {
  allBilings: [Projet!]!

}
`;
