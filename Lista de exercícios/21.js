// 21. Filtrar números
let arr = [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']
function filtrarNumeros(arr) {
    return arr.filter(el => typeof el === 'number');
}

console.log(filtrarNumeros(arr))