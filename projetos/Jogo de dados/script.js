function JogarDados() {
//Gerar número aleatório entre 1 e 6.
    let dado1 = Math.floor(Math.random() * 6) + 1
    let dado2 = Math.floor(Math.random() * 6) + 1    
//Atualiza as imagens dos dados
let img1 = document.getElementById("dado1")
let img2 = document.getElementById("dado2")

img1.setAttribute("src", `dado${dado1}.png`)
img2.setAttribute("src", `dado${dado2}.png`)

//Vencedor

let resultado = document.querySelector("h1")

if (dado1 > dado2) {
    resultado.textContent = "O jogador 1 venceu!"
}
else if (dado2 > dado1){
    resultado.textContent = "O jogador 2 venceu!"
}
else {
    resultado.textContent = "Empate!"
}
}