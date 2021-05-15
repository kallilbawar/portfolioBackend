import { client } from "../../prisma/client";

export const NotificationsResolvers = {
  Query: {
    allNotifications: () => {
      return client.notification.findMany();
    },
   
  },
}
