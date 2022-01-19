const fs = require('fs')
const { v4 } = require('uuid')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')
const { Pedido } = require('./types')
const {
  PedidosPath,
  getPedidosFromFile,
} = require('./connection')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPedido: {
      type: Pedido,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        bebidasId: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(_, args) {
        const PedidoToAdd = {
          id: v4(),
          name: args.name,
          bebidasId: args.bebidasId,
        }
        const Pedidos = getPedidosFromFile()
        const newPedidos = Pedidos.concat(PedidoToAdd)
        fs.writeFileSync(PedidosPath, JSON.stringify(newPedidos))
        return PedidoToAdd
      },
    },
  },
})

module.exports = Mutation