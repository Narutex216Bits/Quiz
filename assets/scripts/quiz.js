import perguntas from '/assets/dados/perguntas.json' assert {type: 'json'}

let idxPergunta = 0;
let nivel = 'A';
let qtdePontos = 0;
let qtdePulos = 0;
let qtdeErros = 0;

//Placar
let spanPulos=document.getElementById('spanPulos')

let btnconfirmar = document.getElementById('btnconfirmar');


let btnpular = document.getElementById('btnpular');
btnpular.addEventListener('click', () => pular());

let btnparar = document.getElementById('btnparar');
btnparar.addEventListener('click', () => parar());

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

    if(qtdePulos == 3){
        btnpular.disabled=true;
    }

    spanPulos.innerText = `Pulos: ${qtdePulos}`;

    sortear();
}

function parar() {
    alert('Que Pena, você desistiu!!!');
    history.back();

}