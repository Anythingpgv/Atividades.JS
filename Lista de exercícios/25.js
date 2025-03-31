// 25. Jogo de adivinhação
let num = Number(prompt('Digite um número de 1 a 10'))
function jogoAdivinhacao(num) {
    let sorteado = Math.floor(Math.random() * 10) + 1
    if (num < 1 || num > 10 && num !== '' && num !== null) {
        return 'Número inválido!';
    } else{
    return num === sorteado ? `Parabéns! O número foi ${sorteado}` : `Que pena! O número foi ${sorteado}`;
}}

console.log(jogoAdivinhacao(num))