// Exercício 12: Crie uma função que recebe o código do produto e a quantidade e retorna o valor total do pedido de acordo com o Cardápio

let codigo = Number(prompt("Digite o código do produto: (100, 200, 300, 400, 500 ou 600)"))
let quantidade = Number(prompt("Digite a quantidade: "))
function calcularPedido(codigo, quantidade) {
    const precos = { 100: 3, 200: 4, 300: 5.5, 400: 7.5, 500: 3.5, 600: 2.8 }
    return precos[codigo] ? `Total: R$ ${(precos[codigo] * quantidade).toFixed(2)}` : "Produto inexistente";
}

console.log(calcularPedido(codigo, quantidade))