// 14. Plano de saúde
let idade = Number(prompt("Digite sua idade: "))
function PlanoSaude(idade) {
    if (idade < 10) return 180;
    if (idade <= 30) return 150;
    if (idade <= 60) return 195;
    return 230;
}
console.log(`O valor do seu plano de saúde é: R$ ${PlanoSaude(idade)}`)