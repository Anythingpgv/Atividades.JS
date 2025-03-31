//26. retorna true ou false se for primo ou não
let numero = Number(prompt("Digite um número: "));
function ehPrimo(numero) {
    if (numero < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(ehPrimo(numero))
