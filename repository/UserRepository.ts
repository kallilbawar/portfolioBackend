import { client } from "../prisma/client";

//repository pattern
export default {
  getAllUsers: () => {
    return client.user.findMany();
  },

  getOneUserByEmail: (email) => {
    return client.user.findUnique({
      where: {
        email: email
      },
    });
  },

  getOneUser: (id) => {
    return client.user.findUnique({
      where: { id: id },
    });
  },

  createUser: ({ nameID, emailID, passwordID }) => {
    console.log(nameID, emailID, passwordID);

    return client.user.create({
      data: {
        name: nameID,
        email: emailID,
        password: passwordID,
      },
    });
  },

  deleteUser: (id) => {
    return client.user.delete({
      where: { id: id },
    });
  },
};
