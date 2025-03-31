// 20. Remover propriedade
let obj = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo'
}
function removerPropriedade(obj, prop) {
    let novoObj =  { ...obj }
    delete novoObj[prop]
    return novoObj
}

console.log(removerPropriedade(obj, 'idade'))