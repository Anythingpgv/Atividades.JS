// 15. Números ímpares
let inicio = Number(prompt("Digite o número inicial: "));
let fim = Number(prompt("Digite o número final: "));
function numerosImpares(inicio = 0, fim = 100) {
    if (inicio > fim) [inicio, fim] = [fim, inicio];
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) console.log(i);
    }
} 
console.log(numerosImpares(inicio, fim));