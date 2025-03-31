// 18. Conceito de notas
let notas = [10, 8, 6, 4, 2, 0];
function conceitoNotas(notas) {
    return notas.map(n => n >= 9 ? 'A' : n >= 7 ? 'B' : n >= 5 ? 'C' : 'D')
}
console.log(conceitoNotas(notas))