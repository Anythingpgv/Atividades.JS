//Exercicío 11: Crie uma função que informa o aumento de um determinado salário dependendo do seu plano.

let planoA = 1.1
let planoB = 1.15
let planoC = 1.2
let salario = Number(prompt("Digite o seu salário: "))

function aumento(planoA, salario, planoB, planoC) {
    if (salario <= 1000) {
        return salario * (1 + planoA)
    } else if (salario > 1000 && salario <= 2000) {
        return salario * (1 + planoB)
    } else {
        return salario * (1 + planoC)
    }
    }

    console.log(aumento(planoA, salario, planoB, planoC))

