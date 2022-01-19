const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = require('graphql')

const Pedido = new GraphQLObjectType({
  name: 'Pedido',
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      bebidasId: {type: GraphQLString }
    }
  },
})

exports.Pedido = Pedido