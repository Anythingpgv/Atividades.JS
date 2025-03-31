// Exercicio 13: Crie um programa que receba um número e retorne o menor número de notas possíveis para o valor informado.
let valor = Number(prompt("Digite um número: "));
function calcularCedulas(valor) {
    const notas = [100, 50, 10, 5, 1];
    let resultado = {};
    notas.forEach(nota => {
        if (valor >= nota) {
            resultado[nota] = Math.floor(valor / nota);
            valor %= nota;
}
    });
    return resultado;
}
console.log(calcularCedulas(valor));