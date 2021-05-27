import { client } from "../prisma/client";

export default {
  getAllContracts: () => {
    return client.contract.findMany({
      include: { user: true },
    });
  },

  getOneContract: (id) => {
    return client.contract.findUnique({
      where: { id: id },
      include: { user: true },
    });
  },

  createContract: ({ number, name, start_date, end_date, userId }) => {
    return client.contract.create({
      data: {
        number: number,
        name: name,
        start_date: start_date,
        end_date: end_date,
        userId: userId,
      },
    });
  },

  updateContract: ({
    ID,
    nameID,
    number,
    valid,
    userID,
    start_date,
    end_date,
  }) => {
    return client.contract.update({
      where: {
        id: ID,
      },

      data: {
        name: nameID,
        number: number,
        valid: valid,
        userId: userID,
        start_date: start_date,
        end_date: end_date,
      },
    });
  },

  deleteContract: (id) => {
    return client.contract.delete({
      where: { id: id },
    });
  },
};
