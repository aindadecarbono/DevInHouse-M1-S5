import { Produto } from './class.mjs'
import { Pedidos } from './class.mjs'

const produtoNovo1 = new Produto('Telefone', 199, true, 2)
const produtoNovo2 = new Produto('Carro', 29999, true, 1)
const produtoNovo3 = new Produto('Televisão', 499, true, 1)
const produtoNovo4 = new Produto('Brinquedo', 39, true, 3)
const produtoNovo5 = new Produto('Livro', 59, true, 2)

const pedido1 = new Pedidos(20220001, 'Fulano')
const pedido2 = new Pedidos(20220002, 'Sicrano')

pedido1.adicionarProduto(produtoNovo1, produtoNovo2, produtoNovo3)

pedido2.adicionarProduto(produtoNovo4, produtoNovo5)

function display(pedido) {
  console.log(`Nome do cliente: ${pedido.nomeCliente}\n`)
  pedido.listaProdutos.forEach(objeto =>
    console.log(
      `Produto: ${objeto.nomeProduto} \nPreço unitário: ${
        objeto.preço
      } \nQuantidade: ${objeto.quantidade} \nSoma dos produtos: ${
        objeto.preço * objeto.quantidade
      } \n`
    )
  )

  console.log(
    `Total do pedido: ${pedido
      .calcularTotal(pedido)
      .toLocaleString('br-BR', { style: 'currency', currency: 'BRL' })} \n`
  )
}

display(pedido1)
display(pedido2)
