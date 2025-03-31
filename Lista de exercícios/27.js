function contarVogais(texto) {
    let vogais = "aeiouAEIOU";
    let contador = 0;

    for (let char of texto) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVogais("JavaScript é incrível!"))
