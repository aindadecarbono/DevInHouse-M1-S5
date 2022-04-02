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
  adicionarProduto(...produto) {
    //console.log('linha 22: ', produto) ==> com ... chegam dois arrays!
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

const produtoNovo1 = new Produto('telefone', 199, true, 2)
const produtoNovo2 = new Produto('carro', 29999, true, 1)
const produtoNovo3 = new Produto('televisão', 499, true, 1)
const produtoNovo4 = new Produto('brinquedo', 39, true, 3)
const produtoNovo5 = new Produto('livro', 59, true, 2)

const pedido1 = new Pedidos(20220001, 'Fulano')
const pedido2 = new Pedidos(20220002, 'Sicrano')

pedido1.adicionarProduto(produtoNovo1, produtoNovo2, produtoNovo3)
pedido1.calcularTotal(pedido1)

pedido2.adicionarProduto(produtoNovo4, produtoNovo5)
pedido2.calcularTotal(pedido2)

console.log(pedido1)
console.log(pedido2)
