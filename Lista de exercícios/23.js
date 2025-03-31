// 23. Números pares em índices pares
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
function filtrarParesIndicesPares(arr) {
    return arr.filter((el, i) => el % 2 === 0 && i % 2 === 0);
}
console.log(filtrarParesIndicesPares(arr))
