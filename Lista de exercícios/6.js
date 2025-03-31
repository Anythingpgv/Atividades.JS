// Exercicio 6: Crie um programa que calcule o valor de delta e as raízes da equação do segundo grau.
let a = Number(prompt("Digite o valor de a (coeficiente de x²): "));
let b = Number(prompt("Digite o valor de b (coeficiente de x): "));
let c = Number(prompt("Digite o valor de c (termo constante): "));

function delta(a, b, c) {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let delta = b * b - 4 * a * c;
        console.log(`${b}2 - 4 * ${a} * ${c} = ${delta}`); 
        
        if (delta < 0) {
            return `Delta negativo (${delta}), não existe raízes reais.`;
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return `Delta = ${delta}, x1 = ${x1}, x2 = ${x2}`;
        }
    } else {
        return "Insira valores válidos para a, b e c.";
    }
}


console.log(delta(a, b, c));
