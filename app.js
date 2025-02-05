//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Principais variáveis
let amigos = [];
let amigosSorteados = [];
let mensagemResult = [];

//Função para mudar texto na tela
function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Agora é Online!');
exibirTextoNaTela('h2', 'Adicione os seus amigos individualmente abaixo!');

//Função atualizar lista
function atualizarListaDeExibicao(){
    let exibir = document.getElementById('listaAmigos');
    exibir.innerHTML = amigos.join('<br>');
}

//Função mostrar resultado
function exibirResultado(){
let exibir = document.getElementById('resultado');
exibir.innerHTML = mensagemResult;
}

//Função para adicionar o nome do amigo
function adicionarAmigo(){
    let campo = document.querySelector('input').value;
    if (campo == ''){
        alert('Insira um nome e depois clique em adicionar!')
    }else{
        amigos.push(campo);
        atualizarListaDeExibicao(amigos);
        limparCampo();
        mensagemResult.splice(0,1,'');
        exibirResultado(mensagemResult);
    }
}

//Função para gerar amigo
function gerarAmigo(){
    let amigosDisponiveis = amigos.filter((_,index) => !amigosSorteados.includes(index));

    if (amigosDisponiveis.length === 0){
        return null;
    }

    let nomes = amigosDisponiveis.length;
    let sorteio = Math.floor(Math.random()*nomes);
    let amigoEscolhido = amigosDisponiveis[sorteio];

    amigosSorteados.push(amigos.indexOf(amigoEscolhido));

    return amigoEscolhido;
}

//Função para sortear amigo
function sortearAmigo(){

    if (amigos.length === 0){
        mensagemResult.splice(0,1,'😉 Ops, para realizar um sorteio você precisa cadastrar seus amigos primeiro!');
        exibirResultado(mensagemResult);

    }else if(amigos.length === amigosSorteados.length) {
        mensagemResult.splice(0,1,'😉 Todos os amigos já foram sorteados! F5 para reiniciar.');
        exibirResultado(mensagemResult);
                   
    }else {
        let sorteio = gerarAmigo();

        if (sorteio != null){
        mensagemResult.splice(0,1,`O seu amigo secreto é ${sorteio}! 😃🎁`);
        exibirResultado(mensagemResult);
    }
}
    
}

//Função para limpar campo
function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}