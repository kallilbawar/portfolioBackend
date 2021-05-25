import {client} from '../prisma/client'


export default{

    getAllTasks: () => {
        return client.task.findMany();
      },
    
    
      getOneTask: (id) => {
        return client.task.findUnique({
          where: { id: id },
        });
      },
    
      createTask: ({  name, description, archived, start_date, end_date, projetID }) => {
        return client.task.create({
          data: {
            
            name: name,
            description: description,
            archived : archived ,
            start_date: start_date,
            end_date : end_date ,
            projetId : projetID,

          },
        });
      },
    
      updateTask: ({ID, name, description, archived, start_date, end_date, projetID}) => {
        return client.task.update({
          where: {
            id: ID,
          },
    
          data: {
            name: name,
            description: description,
            archived : archived ,
            start_date: start_date,
            end_date : end_date ,
            projetId : projetID,

          },
        });
      },
    
      deleteTask: (id) => {
        return client.task.delete({
          where: { id: id },
        });
      },

}