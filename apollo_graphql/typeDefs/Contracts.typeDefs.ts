import {gql} from "apollo-server";

export const ContractsTypeDefs = gql`

type Contract {
  id: Int!
  name: String!
  userId: User!
}

type Query {
  allContracts: [Contract!]!

}
`;
