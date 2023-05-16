// Método java script
// Usamos os comentarios para ter um passo a passo do que o código fará, como se fosse um esboço.

/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passso 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema


// Método console.log serve para ser usado no console do navegador.
// Buscar elemento pelo id, com o console.log ativo podemos verificar o andamento do projeto no console do js.
// console.log(document.getElementById("botao-alterar-tema"));

// A variável const recebe o id, como a variável é do tipo const ela não muda, será sempre constante.
// Nome da variável tudo junto e com camel case, ou seja, letras maiusculas para dividir uma palavra e outra.
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Testar no console a saída do comando
// console.log(botaoAlterarTema);


// passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body

// querySelector serve como seletor busca direto pela tag
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// Teste no console
// console.log(body);

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

// Aqui o evento de pegar o clique do usuário no botão de troca de tema.
botaoAlterarTema.addEventListener("click", () => {

    // - passso 6 - verificar se o body já tem a classe modo-escuro
    // Condicionais

    // Cria-se uma variável para conter o boolean do modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    // toggle alterna entre adicionar ou retirar as classes, substitui as linhas remove e add comentadas abaixo
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body
        // body.classList.remove("modo-escuro");
        // passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        // Método para adicionar a classe modo-escuro no body.
        // body.classList.add("modo-escuro");

        // passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }

    // console.log("clicou No Botao");
    // Passo 4 é feito dentro do evento de clique do usuário no botão de troca de tema
    // passo 4 - adicionar a classe modo-escuro no body
    //  objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
    // - passo 7 - trocar a imagem do botão de alterar tema pra sol
});