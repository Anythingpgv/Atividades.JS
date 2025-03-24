// Exercício 3: Crie uma função que recebe dois números e retorna um número aleatório entre eles.

function sorteio(min, max) {
    if (!isNaN(min) && !isNaN(max) && min < max) {

     let num = Math.floor(Math.random() * (max - min + 1)) 
     return num
} else {
    return "intervalo invalido"
}
}

let min = Number(prompt("Digite o valor minimo"))
        let max = Number(prompt("Digite o valor maximo"))

let sorteado = sorteio(min, max)

alert(`O número sorteado foi ${sorteado}`)