/* O comando let usado para criar variável*/
let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor){
    circulo.style.background = cor
}