//Exercicío 10: Utilizando um switch, cria um algoritmo que mostra modelos de automóveis e retorna se o estabelecimento tem ou não o carro solicitado pelo usuário.
// 10. Compra de carro

let modelo = prompt("Qual modelo de carro você deseja? (hatch, sedan, motocicleta, caminhonete)")
function comprarCarro(modelo) {
switch (modelo) {
    case "hatch": 
        return "Compra efetuada com sucesso";

    case "sedan": 
    case "motocicleta": 
    case "caminhonete": 
        return "Tem certeza que não prefere este modelo?";

    default:
        return "Não trabalhamos com este tipo de automóvel aqui"
}
}
console.log(comprarCarro(modelo))