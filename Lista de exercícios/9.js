//Exercicío 9: Crie uma função que calcula o fatorial de um número.
let num = Number(prompt("Digite um número (maior que 0)."))

function fatorial(num) {
    if (!isNaN(num) && num > 0) {
        let fat = 1
        for (let i = 1; i <= num; i++) {
            fat *= i
        }
        return fat
    } else {
        return "Digite um número valido"
    }
}

console.log(fatorial(num))