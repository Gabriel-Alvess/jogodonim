var numPecas = 21;
var valorAtual = document.getElementById('numPecas')
var mensagens = document.getElementById('mensagens')
var resetar = document.getElementById('resetar')
var botoesJogador1 = document.getElementsByClassName('jogador-1');
var botoesJogador2 = document.getElementsByClassName('jogador-2');
var botoes3 = document.getElementsByClassName('botao-3')
var botoes2 = document.getElementsByClassName('botao-2')
var vez = 1

if(vez==1){
    desabilita(botoesJogador2)
}else{
    desabilita(botoesJogador1)
}

function alerta(mensagem, tipo) {
    mensagens.innerHTML += `
        <div class="alert alert-${tipo}" role="alert">
            ${mensagem}
        </div>
    `
}

function removerPeca(jogador, numero) {

    if(jogador==1){
        vez=2
    }else{
        vez=1
    }

    numPecas = numPecas - numero;
    valorAtual.innerText = numPecas;

    alerta(`jogador ${jogador} removeu ${numero} peças`, 'dark');
    
    if (numPecas == 3) {
        desabilita(botoes3)
    }
    if (numPecas == 2) {
        desabilita(botoes2)
        desabilita(botoes3)
    }
    
    if (numPecas == 1) {
        alerta(`Jogador ${jogador} ganhou!`, 'success');
        valorAtual.innerText = `Jogador ${jogador} ganhou!`;
        resetar.style.display = 'block';
    } else {
        alerta(`vez do jogador ${vez}.`, 'dark');
        if(jogador==1){
            desabilita(botoesJogador1)
            habilita(botoesJogador2)
        }else{
            desabilita(botoesJogador2)
            habilita(botoesJogador1)
        }
    }
}

function habilita(botoes) {
    for (const botao of botoes) {
        botao.disabled = false;
    }
    if (numPecas == 3) {
        desabilita(botoes3)
    }
    if (numPecas == 2) {
        desabilita(botoes2)
        desabilita(botoes3)
    }
}

function desabilita(botoes){
    for (const botao of botoes) {
        botao.disabled = true;
    }
}

function reseta() {
    numPecas = 21;
    valorAtual.innerText = numPecas;
    mensagens.innerHTML = '';
    habilita(botoesJogador1)
    habilita(botoesJogador2)
    resetar.style.display = 'none';
}

