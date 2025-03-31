// 24. Somar despesas
let produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true }]
function somarDespesas(produtos) {
    return produtos.reduce((total, p) => total + p.preco, 0);
}
console.log(somarDespesas(produtos))