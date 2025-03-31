// Crie uma função que recebe um número e retorna o mesmo com duas casas decimais.
let valor = 0.30000000000000004

function conversao(valor) {
    valor = valor.toFixed(2)
    valor = valor.replace('.', ',')
    valor = 'R$' + valor
    return valor
}

console.log(conversao(valor))