// 17. Contar números em intervalo
let vetor = [10, 12, 15, 25, 30, 5, 8, 20, 22, 18];
function contarNumerosIntervalo(vetor) {
    let dentro = 0, fora = 0;
    vetor.forEach(n => (n >= 10 && n <= 20) ? dentro++ : fora++);
    return { dentro, fora }
}
console.log(contarNumerosIntervalo(vetor))