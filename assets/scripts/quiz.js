import perguntas from '/assets/dados/perguntas.json' assert {type: 'json'}

let idxPergunta = 0;
let nivel = 'A';
let qtdePontos = 0;
let qtdePulos = 0;
let qtdeErros = 0;

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
    