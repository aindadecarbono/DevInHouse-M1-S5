class Produto {
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

class Pedidos {
  numeroPedido
  dataPedido
  estaPago
  nomeCliente
  total
  listaProdutos
  adicionarProduto(produto) {
    if (produto instanceof Produto) {
      this.listaProdutos.push(produto)
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

const produtoNovo1 = new Produto('telefone', 199, true, 2)
const produtoNovo2 = new Produto('carro', 29999, true, 1)
const pedidoNovo = new Pedidos(1, 'Bruno')

pedidoNovo.adicionarProduto(produtoNovo1)
pedidoNovo.adicionarProduto(produtoNovo2)

console.log(pedidoNovo.calcularTotal(pedidoNovo))
