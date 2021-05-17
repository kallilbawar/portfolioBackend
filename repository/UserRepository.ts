import { client } from "../prisma/client";

//repository pattern
export default {
  getAllUsers: () => {
    return client.user.findMany();
  },

  getOneUser: (id) => {
    return client.user.findUnique({
      where: { id: id },
    });
  },

  createUser: (name, email, password) => {
    return client.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
  },

  deleteUser: (id) => {
    return client.user.delete({
      where: { id: id },
    });
  },
};
