import {gql} from "apollo-server";

export const MockUpsTypeDefs = gql`

type MockUp {
  id: Int!
  name:    String!
  path: String!
}

extend type Query {
  allMockUps: [MockUp!]!

}
`;
