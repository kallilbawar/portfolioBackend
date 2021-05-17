import { client } from "../../prisma/client";

export const TasksResolvers = {
  Query: {
    allTasks: () => {
      return client.task.findMany();
    },
   
  },
}
