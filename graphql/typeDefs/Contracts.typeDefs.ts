import { gql } from "apollo-server";


export const ContractsTypeDefs = gql`

scalar GQLDateTime

  type Contract {
    id: Int!
    name: String!
    number: Int!
    start_date: GQLDateTime!
    end_date: GQLDateTime!
    userId: Int!
  }

 type Query {
    listContracts: [Contract!]!
    getContract(id: Int!): Contract
  }

 extend type Mutation {
    createContract(
      number: Int!
      name: String!
      start_date: GQLDateTime!
      end_date: GQLDateTime!
      userId: Int!
    ): Contract
    updateContract(
      id: Int!
      number: Int!
      name: String!
      start_date: GQLDateTime!
      end_date: GQLDateTime!
      userId: Int!
    ): Contract
    deleteContract(id: Int!): Contract
  }
`;
