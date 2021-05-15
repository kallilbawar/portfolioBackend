import {gql} from "apollo-server";

export const TasksTypeDefs = gql`

type Task {
  id: Int!
  number: Int!
  description: String
}

extend type Query {
  allTasks: [Task!]!

}
`;
