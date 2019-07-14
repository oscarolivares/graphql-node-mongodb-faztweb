import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

import { connect } from "./database";

const app = express();
connect();


app.get('/', (req, res) => {
  res.redirect('/graphql');
})

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  context: {
    message: "Test context"
  }
}))


app.listen(3000, () => console.log('Server on port 3000'));