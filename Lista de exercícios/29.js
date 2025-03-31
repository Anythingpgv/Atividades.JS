//29. Sequência de Fibonacci
let n = Number(prompt("Digite um número para gerar a sequência de Fibonacci: "));
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq
}


console.log(fibonacci(n))
