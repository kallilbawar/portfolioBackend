import {client} from '../prisma/client'


export default{

    getAllMockUps: () => {
        return client.mockUp.findMany();
      },
    
    
      getOneMockUp: (id) => {
        return client.mockUp.findUnique({
          where: { id: id },
        });
      },
    
      createMockUp: ({ name, path, projetId}) => {
        return client.mockUp.create({
          data: {
            name: name,
            path: path,
            projetId: projetId,

          },
        });
      },
    
      updateMockUp: ({ID, name, path, projetId}) => {
        return client.mockUp.update({
          where: {
            id: ID,
          },
    
          data: {
            name: name,
            path: path,
            projetId: projetId,
          },
        });
      },
    
      deleteMockUp: (id) => {
        return client.mockUp.delete({
          where: { id: id },
        });
      },

}