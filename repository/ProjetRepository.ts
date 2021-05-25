import {client} from '../prisma/client'


export default{

    getAllProjets: () => {
        return client.projet.findMany();
      },
    
    
      getOneProjet: (id) => {
        return client.projet.findUnique({
          where: { id: id },
        });
      },
    
      createProjet: ({  number, description, start_date, end_date, userID }) => {
        return client.projet.create({
          data: {
            
            number: number,
            description: description,
            start_date: start_date,
            end_date : end_date ,
            userId : userID,

          },
        });
      },
    
      updateProjet: ({ID,  number, description, start_date, end_date, userID}) => {
        return client.projet.update({
          where: {
            id: ID,
          },
    
          data: {
            number: number,
            description: description,
            start_date: start_date,
            end_date : end_date ,
            userId : userID,

          },
        });
      },
    
      deleteProjet: (id) => {
        return client.projet.delete({
          where: { id: id },
        });
      },

}