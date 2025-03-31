//Exercicío 8: Crie uma fnção que recebe um ano e calcula se ele é bissexto ou não.
let ano = Number(prompt("Digite um ano: "))

function bissexto(ano) {
  if (!isNaN(ano)) {
    if (ano % 4 === 0 && (ano % 100 != 0 || ano % 400 == 0)) {
        return `${ano} é um ano bissexto.`
    } else {
        return `${ano} nao é um ano bissexto.`
    }
} 
  else { 
    return "Valor inválido. Por favor, insira um número."}}

console.log(bissexto(ano))