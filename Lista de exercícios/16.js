// 16. Anuidade
let mes = Number(prompt("Digite o mês: "))
let valor = Number(prompt("Digite o valor: "))
function calcularAnuidade(mes, valor) {
    if (mes < 1 || mes > 12) {
        console.log("Mês inválido");
        return;
    } else if (isNaN(mes) || isNaN(valor)) {
        return "Valor inválido";
    } else {
    return mes > 1 ? valor * Math.pow(1.05, mes - 1) : valor}
}
console.log(calcularAnuidade(mes, valor))