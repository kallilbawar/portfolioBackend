import {client} from '../prisma/client'


export default{

    getAllContracts: () => {
        return client.contract.findMany();
      },
    
    
      getOneContract: (id) => {
        return client.contract.findUnique({
          where: { id: id },
        });
      },
    
      createContract: ({ nameID, number, userID, start_date, end_date }) => {
        return client.contract.create({
          data: {
            name: nameID,
            number: number,
            userId:userID,
            start_date: start_date,
            end_date : end_date ,

          },
        });
      },
    
      updateContract: ({ID, nameID, number, valid, userID, start_date, end_date}) => {
        return client.contract.update({
          where: {
            id: ID,
          },
    
          data: {
            name: nameID,
            number: number,
            valid: valid,
            userId:userID,
            start_date: start_date,
            end_date : end_date ,
          },
        });
      },
    
      deleteContract: (id) => {
        return client.contract.delete({
          where: { id: id },
        });
      },

}