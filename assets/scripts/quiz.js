import perguntas from '/assets/dados/perguntas.json' assert {type: 'json'}

let idxPergunta = 0;
let nivel = 'A';
let qtdePontos = 0;
let qtdePulos = 0;
let qtdeErros = 0;

//Placar
let spanNivel=document.getElementById('spanNivel')
let spanPontos=document.getElementById('spanPontos')
let spanPulos=document.getElementById('spanPulos')
let spanErros=document.getElementById('spanErros')

//botões
let btnconfirmar = document.getElementById('btnconfirmar');
btnconfirmar.addEventListener('click', () => confirmar());

let btnpular = document.getElementById('btnpular');
btnpular.addEventListener('click', () => pular());

let btnparar = document.getElementById('btnparar');
btnparar.addEventListener('click', () => parar());

//Perguntas e respostas
let pergunta = document.getElementById('pergunta');
let resp1 = document.getElementById('resp1');
let resp2 = document.getElementById('resp2');
let resp3 = document.getElementById('resp3');
let resp4 = document.getElementById('resp4');

sortear();

function sortear() {
    idxPergunta = Math.floor(Math.random()* perguntas.length);
    console.log(idxPergunta)
   
    pergunta.innerHTML = perguntas[idxPergunta].PERGUNTA;
    resp1.innerHTML = perguntas[idxPergunta].RESP1;
    resp2.innerHTML = perguntas[idxPergunta].RESP2;
    resp3.innerHTML = perguntas[idxPergunta].RESP3;
    resp4.innerHTML = perguntas[idxPergunta].RESP4;
}
    
function pular() {
    qtdePulos++;

    if(qtdePulos == 3) {
        btnpular.disabled=true;
    }

    spanPulos.innerText = `Pulos: ${qtdePulos}`;

    sortear();
}

function parar() {
    alert('Que Pena, você desistiu!!!');
    history.back();

}

function confirmar() {
    let valorResposta = document.querySelector('input[name="resposta"]:checked');
    console.log(valorResposta);

if(valorResposta == null){
    alert('Selecione uma resposta antes de confirmar...');
    return;
}

    if(valorResposta.value == perguntas[idxPergunta].CERTA){
        alert('Acertou miseravi!');
        qtdePontos++;
        
    }else{
        alert('Ahh que burro!! Dá zero pra ele!');
        qtdeErros++;
    }

    valorResposta.checked = false;

    sortear()
    
    atualizarPlacar()

}

function atualizarPlacar(){
    spanNivel.innerText = `Nivel: ${nivel}`;
    spanPontos.innerText = `Pontos: ${qtdePontos}`;
    spanPulos.innerText = `Pulos: ${qtdePulos}`;
    spanErros.innerText = `Erros: ${qtdeErros}`;
}

