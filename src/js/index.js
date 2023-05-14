//comentário de uma linha

/* 
    Escrever aqui o que precisa fazer na programação para não se perder, mas em projetos sérios, apagar essas cixas de comentários

    - sempre fazer uma análise de objetivo e quebrar em passos para melhor funcionalidade
*/

// pegar objetivos e passos do bloco de texto e ir separando ao longo do corpo para não se perder em qual passo está

//sempre criar nomes de variável específicos
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo){
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else{
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

