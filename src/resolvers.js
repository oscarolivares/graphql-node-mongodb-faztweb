import { tasks } from "./sample-data";

export const resolvers = {
  Query: {
    test1: () => {
      return 'Método de objeto definido con la sintáxis de ES5'
    },
    test2() {
      return 'Método de objeto definido con la sintáxis de ES6'
    },
    test3(root, args) {
      return `Query que recibe argumentos, el argumento fue: ${args.name}`
    },
    test4(root, { name }) {
      return `Ahora se usa el detructuring para especificar el argumento, el argumento fue: ${name}`
    },

    tasks() {
      return tasks;
    }
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    }
  }
};