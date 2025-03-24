//Exercício 4: Crie um programa que simula uma calculadora automática. A cada 2 segundos, a calculadora deve sortear dois números e sortear uma operação matemática (+, -, *, /, %).
// A calculadora deve então imprimir a expressão matemática e o resultado obtido.
function soma(num1, num2) {
    return num1 + num2;
  
}

function subtrai(num1, num2) {
      return num1 - num2;
}
  
function multiplica(num1, num2) {
      return num1 * num2;
}
  
function divide(num1, num2) {
    if (num2 === 0) {
        return "Erro: Divisão por zero";
    }
    else {
      return num1 / num2;}
}
function resto(num1, num2) {
    if (num2 === 0) {
        return "Erro: Divisão por zero";
    }
    else {
      return num1 % num2;}
}

const operacoes = [
    {simbolo : "+", funcao: soma},
    {simbolo : "-", funcao: subtrai},
    {simbolo : "*", funcao: multiplica},
    {simbolo : "/", funcao: divide},
    {simbolo : "%", funcao: resto}
]

function altomatico(caculadora) {

  let num1 = Math.floor(Math.random() * 100)
  let num2 = Math.floor(Math.random() * 100)
  let indice = Math.floor(Math.random() * operacoes.length)
  let operacao = operacoes[indice]
  let resultado = operacao.funcao(num1, num2)

  console.log(`${num1} ${operacao.simbolo} ${num2} = ${resultado}`)
}

 const intervalo = setInterval(() => { 
    altomatico()
    
}, 2000); // 2000ms = 2s

const parar = setInterval(() => {
   let resposta = prompt("Deseja parar? (sim/nao)").toLowerCase()
    if (resposta === "sim") {
        clearInterval(intervalo)
        clearInterval(parar)
    } 
}, 10000); // 10000ms = 10s
