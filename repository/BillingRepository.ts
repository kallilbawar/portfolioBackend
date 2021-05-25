import { date } from "joi";
import { client } from "../prisma/client";

export default {
  getAllBillings: () => {
    return client.billing.findMany();
  },

  getOneBilling: (id) => {
    return client.billing.findUnique({
      where: { id: id },
    });
  },

  createBilling: ({ number, description, date, userID }) => {
    return client.billing.create({
      data: {
        number: number,
        description: description,
        date: date,
        userId: userID,
      },
    });
  },

  updateBilling: ({ ID, number, description, date, userID}) => {
    return client.billing.update({
      where: {
        id: ID,
      },

      data: {
        number: number,
        description: description,
        date: date,
        userId: userID,
      },
    });
  },

  deleteBlling: (id) => {
    return client.billing.delete({
      where: { id: id },
    });
  },
};
