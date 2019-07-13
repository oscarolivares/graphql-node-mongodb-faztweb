import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
  type Query {
    test1: String
    test2: String
    test3(name: String): String
    test4(name: String): String
    tasks: [Task]
  }

  type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
  }

  type Mutation {
    createTask(input: TaskInput): Task
  }

  input TaskInput {
    title: String!
    description: String!
    number: Int
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})