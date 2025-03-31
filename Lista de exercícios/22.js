// 22. Objeto para array
let obj = {
    nome: 'Wilson',
    idade: 16,
    cidade: 'Bahia'
}
function objetoParaArray(obj) {
    return Object.entries(obj);
}
console.log(objetoParaArray(obj))