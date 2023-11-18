import perguntas from '/assets/dados/perguntas.json' assert {type: 'json'}

let idxPergunta = 2;
let pergunta = document.getElementById('pergunta');

pergunta.innerHTML = perguntas[idxPergunta].PERGUNTA;
resp1.innerHTML = perguntas[idxPergunta].RESP1;
resp2.innerHTML = perguntas[idxPergunta].RESP2;
resp3.innerHTML = perguntas[idxPergunta].RESP3;
resp4.innerHTML = perguntas[idxPergunta].RESP4;
