const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.use(cors())

const port = process.env.PORT || 3000;

app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.info(`Aplicação rodando em ${port}`)
});