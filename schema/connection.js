const fs = require('fs')
const path = require('path')

const PedidosPath = path.join(
  path.dirname(process.mainModule.filename),
  'database',
  'pedidos.json',
)

function getPedidosFromFile() {
  return JSON.parse(fs.readFileSync(PedidosPath))
}

exports.PedidosPath = PedidosPath
exports.getPedidosFromFile = getPedidosFromFile