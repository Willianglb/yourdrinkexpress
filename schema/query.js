const { GraphQLObjectType, GraphQLList } = require('graphql')
const { Pedido } = require('./types')
const { getPedidosFromFile } = require('./connection')

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    pedidos: {
      type: new GraphQLList(Pedido),
      resolve() {
        return getPedidosFromFile()
      },
    }
  }
})

module.exports = Query