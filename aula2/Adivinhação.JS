let gerador = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let sorte;
while (sorte !== gerador) {

        if (tentativas === 0){
            sorte = prompt("Opa! Porquê não tenta acertar um número de 1 à 100?")}
            
        else { sorte = prompt("Putz! Tente novamente!")}

if (!isNaN(sorte) && sorte !== null && sorte.trim() !== "") {
    tentativas++
    if (sorte < gerador)
        alert("O número é maior!")
    else if (sorte > gerador)
        alert("O número é menor!")
    else {alert(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`)
    break} 
}
else {alert("Porfavor, insira um número real.")}
}