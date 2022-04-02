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
  listaProdutos
  adicionarProduto(produto) {
    if (produto instanceof Produto) {
      this.listaProdutos.push(produto)
    }
  }
  constructor(numeroPedido, nomeCliente) {
    this.numeroPedido = numeroPedido
    this.dataPedido = new Date().toLocaleDateString()
    this.estaPago = false
    this.listaProdutos = []
    this.nomeCliente = nomeCliente
  }
}

const produtoNovo1 = new Produto('telefone', 199, true, 1)
const produtoNovo2 = new Produto('carro', 29999, true, 1)
const pedidoNovo = new Pedidos(1, 'Bruno')

pedidoNovo.adicionarProduto(produtoNovo1)
pedidoNovo.adicionarProduto(produtoNovo2)

console.log(pedidoNovo)
