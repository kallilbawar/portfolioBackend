import {gql} from "apollo-server";

export const NotificationsTypeDefs = gql`

type Notification {
  id: Int!
  name: String!
  description: String
}

extend type Query {
  allNotifications: [Notification!]!

}
`;
