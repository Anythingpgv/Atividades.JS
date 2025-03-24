// Exercício 2: Crie uma função que recebe um número e retorna se ele é primo ou não.
let number = Number(prompt("Digite um número: "))

function ehPrimo(number) {
    if (!isNaN(number) && number > 1 && number.trim() !== "") { 
    
        if (number <= 1) {
            return false
}

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false
    }
}

return true


} else
    return "Digite um número válido"
}

console.log(ehPrimo(number))