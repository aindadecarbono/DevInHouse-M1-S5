class Pedidos {
  numeroPedido
  dataPedido
  estaPago
  listaProdutos
  nomeCliente
  constructor(numeroPedido, nomeCliente) {
    this.numeroPedido = numeroPedido
    this.dataPedido = new Date().toLocaleDateString()
    this.estaPago = false
    this.listaProdutos = []
    this.nomeCliente = nomeCliente
  }
}

console.log(new Pedidos(123, 'Nome Sobrenome'))
