// Exercicio 7: Crie uma função que recebe pontuações e retorna o recorde e o pior recorde.
function analise(pontuacao) {
    let recorde = 0
    let piorrecorde = 0

    let melhorPontuacao = pontuacao[0]
    let piorPontuacao = pontuacao[0]

    for (let i = 1; i < recorde; i++) {
        if (pontuacao[1] > melhorPontuacao) {
            melhorPontuacao = pontuacao[1]
            recorde++
        }
        if (pontuacao[1] < piorPontuacao) {
            piorPontuacao = pontuacao[1]
            piorrecorde++
        }
    }
    
    return [recorde, piorrecorde]
}

let pontuacao = [10, 20, 6, 12, 33, 21, 40, 29, 60, 16]
console.log(analise(pontuacao))