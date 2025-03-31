//28. Maior nota
function maiorNota(estudantes) {
    if (!Array.isArray(estudantes) || estudantes.length === 0) {
        return "Erro: A lista de estudantes está vazia ou inválida."
    }

    let estudanteComMaiorNota = estudantes[0]

    for (let estudante of estudantes) {
        if (estudante.nota > estudanteComMaiorNota.nota) {
            estudanteComMaiorNota = estudante
        }
    }

    return `O aluno com a maior nota é ${estudanteComMaiorNota.nome} com nota ${estudanteComMaiorNota.nota}.`
}

const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 9.2 },
    { nome: "Carlos", nota: 7.8 },
    { nome: "Diana", nota: 9.5 },
    { nome: "Eduardo", nota: 8.0 }]

console.log(maiorNota(alunos))