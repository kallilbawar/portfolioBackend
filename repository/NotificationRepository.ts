import {client} from '../prisma/client'


export default{

    getAllNotifications: () => {
        return client.notification.findMany();
      },
    
    
      getOneNotification: (id) => {
        return client.notification.findUnique({
          where: { id: id },
        });
      },
    
      createNotification: ({ name, description, userID, seen }) => {
        return client.notification.create({
          data: {
            name: name,
            description: description,
            seen: seen,
            userId:userID,
          },
        });
      },
    
      updateNotification: ({ID, name, description, userID, seen}) => {
        return client.notification.update({
          where: {
            id: ID,
          },
    
          data: {
            name: name,
            description: description,
            seen: seen,
            userId:userID,
          },
        });
      },
    
      deleteNotification: (id) => {
        return client.notification.delete({
          where: { id: id },
        });
      },

}