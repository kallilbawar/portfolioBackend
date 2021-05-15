import {gql} from "apollo-server";

export const ContractsTypeDefs = gql`

type Contract {
  id: Int!
  name: String!
  number: Int!
  user: User!
  userId: Int!
}

type Query {
  allContracts: [Contract!]!

}
`;
