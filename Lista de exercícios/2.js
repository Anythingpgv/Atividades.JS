let lado1 = prompt("Informe o lado A")
let lado2 = prompt("Informe o lado B")
let lado3 = prompt("Informe o lado C")

function triangulo(){
    if (lado1 == lado2 && lado1 == lado3) {
        return "É um triângulo Equilátero"}
    else if (lado1 == lado2 && lado3 != lado1 || lado1 == lado3 && lado2 != lado1) {
        return "É um triângulo Isósceles"
    }
    else return "É um triângulo Escaleno"
}
console.log(triangulo())