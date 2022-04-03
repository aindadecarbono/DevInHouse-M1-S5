export class Produto {
  nomeProduto
  preço
  emEstoque
  quantidade
  constructor(nomeProduto, preço, emEstoque, quantidade) {
    this.nomeProduto = nomeProduto
    this.preço = preço
    this.emEstoque = emEstoque
    this.quantidade = quantidade
  }
}

export class Pedidos {
  numeroPedido
  dataPedido
  estaPago
  nomeCliente
  total
  listaProdutos
  adicionarProduto(...produto) {
    if (produto.map(element => element instanceof Produto)) {
      this.listaProdutos.push(...produto)
    }
  }

  calcularTotal(element) {
    for (let i = 0; i < element.listaProdutos.length; i++) {
      this.total =
        this.total +
        element.listaProdutos[i].preço * element.listaProdutos[i].quantidade
    }
    return this.total
  }

  constructor(numeroPedido, nomeCliente) {
    this.numeroPedido = numeroPedido
    this.dataPedido = new Date().toLocaleDateString()
    this.estaPago = false
    this.nomeCliente = nomeCliente
    this.total = 0
    this.listaProdutos = []
  }
}
