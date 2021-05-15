import {gql} from "apollo-server";

export const ProjetsTypeDefs = gql`

type Projet {
  id: Int!
  number: Int!
  description: String
}

extend type Query {
  allProjets: [Projet!]!

}
`;
