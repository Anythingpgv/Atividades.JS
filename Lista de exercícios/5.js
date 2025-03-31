// Exercicio 5 - Juros Simples e Compostos

let capital = prompt("Qual o valor do capital?")
let taxa = 110 / 100
let aplicação = prompt("Quanto tempo de aplicação?")
function simples(jurosSimples) {
    let jurosSimples = capital * taxa * aplicação
    return jurosSimples
}

function composto() {
    let jurosComposto = capital * Math.pow(taxa, aplicação) - capital
    return jurosComposto
}

console.log("Juros Simples: " + simples())
console.log("Juros Compostos: " + composto())