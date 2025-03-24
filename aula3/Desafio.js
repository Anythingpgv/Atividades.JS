// Crie uma função que gere um CPF aleatório.
function gerarCPF() {

    const cpf = []
    for (let i = 0; i < 9; i++) {
        cpf.push(Math.floor(Math.random() * 10))
    }
    for (let i = 0; i < 2; i++) {

        cpf.push = Math.floor(Math.random() * 10)
    }
    return cpf.join("")}    

console.log(gerarCPF())