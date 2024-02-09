// Ir no chatgpt e colocar essa instrução:
// Crie 10 perguntas sobre o tópico Fundamentos de JavaScript com 3 opções de resposta e uma resposta correta, para compor um aplicativo em JavaScript. Responda nessa estrutura de dados do exemplo abaixo.
// const perguntas = [
// 	{
// 		pergunta: "Pergunta 01",
// 		respostas: [
// 			"Resposta A",
// 			"Resposta B",
// 			"Resposta C",
// 		],
// 		correta: 2
// 	},
// ];

const perguntas = [
    {
        pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
        respostas: [
            "let",
            "var",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Como se refere à manipulação de elementos HTML usando JavaScript?",
        respostas: [
            "DOM Manipulation",
            "CSS Styling",
            "HTML Rendering",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é utilizado para adicionar um elemento no final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "addToEnd()",
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '===' verifica em JavaScript?",
        respostas: [
            "Igualdade de valor e tipo",
            "Igualdade de valor apenas",
            "Igualdade de tipo apenas",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para converter uma string para um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "toFixed()",
            "parseFloat()",
        ],
        correta: 0
    },
    {
        pergunta: "Em JavaScript, como você chama uma função que é parte de um objeto?",
        respostas: [
            "invokeFunction()",
            "callFunction()",
            "método()",
        ],
        correta: 2
    },
    {
        pergunta: "O que o operador '++' faz em JavaScript?",
        respostas: [
            "Incrementa o valor em 1",
            "Decrementa o valor em 1",
            "Dobra o valor",
        ],
        correta: 0
    },
    {
        pergunta: "Como você comenta uma única linha de código em JavaScript?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "# Comentário",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
        respostas: [
            "Selecionar um elemento pelo ID",
            "Selecionar um elemento pelo nome da tag",
            "Selecionar um elemento pela classe",
        ],
        correta: 1
    },
    {
        pergunta: "O que é 'NaN' em JavaScript?",
        respostas: [
            "Not a Number",
            "Null and None",
            "Negative and Nonexistent",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();

const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;


// loop ou laço de repetição
// também chamamos as chaves {} de escopo
for(const item of perguntas) {
	// console.log(item.pergunta);
	
	//aqui ele está clonando o nó:
	const quizItem = template.content.cloneNode(true);
	//aqui ele está modificando o h3:
	quizItem.querySelector('h3').textContent = item.pergunta;
	
	for(let resposta of item.respostas) {
		//pegando o dt do HTML:
		// e ele tá dizendo que o dt é filho do dl:
		const dt = quizItem.querySelector('dl dt').cloneNode(true);
		dt.querySelector('span').textContent = resposta;
		dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
		dt.querySelector('input').value = item.respostas.indexOf(resposta);
		
		dt.querySelector('input').onchange = (event) => {
			const estaCorreta = event.target.value == item.correta;
			
			corretas.delete(item);
			if (estaCorreta) {
				corretas.add(item);
			}
			
			mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
			
		}
		
		//colocar na tela:
		quizItem.querySelector('dl').appendChild(dt);
	}
	
	//remover o Resposta A:
	quizItem.querySelector('dl dt').remove();
	
	//coloca a pergunta na tela:
	quiz.appendChild(quizItem);
}