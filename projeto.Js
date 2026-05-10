/*
Imagine que você abriu uma loja:
1) Crie o nome de 10 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/

const produtos = [
    "Chuteira",
    "Calção",
    "Tênis",
    "Boné",
    "Meia",
    "Moletom",
    "Jeans",
    "Chapéu",
    "Cinto",
    "Brincos"
]

const precos = [
    99.90,
    49.90,
    199.90,
    29.90,
    9.90,
    109.90,
    189.90,
    39.90,
    29.90,
    19.90
]

// mostrar estoque
function mostrarEstoque() {
    console.log("=== ESTOQUE ===")

    for(let i = 0; i < produtos.length; i++) {
        console.log(i + " - " + produtos[i] + " - R$ " + precos[i])
    }

    console.log("-------------------")
}

//  adicionar produto
function adicionarProduto(nome, preco) {
    produtos.push(nome)
    precos.push(preco)

    console.log("Produto adicionado!")
}

//remover produto pelo índice
function removerProduto(indice) {
    produtos.splice(indice, 1)
    precos.splice(indice, 1)

    console.log("Produto removido!")
}


// FUNÇÕES para executar:

// mostra estoque
mostrarEstoque()

// adiciona produto
adicionarProduto("Camiseta", 59.90)

// mostra estoque
mostrarEstoque()

// remove um elemento pelo índice
removerProduto(2)

// mostra estoque
mostrarEstoque()
