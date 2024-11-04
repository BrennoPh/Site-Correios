import { atualizarPontuacao,atualizarPontuacaoQuiz, getUserId} from './pontuacao.js';
import {perguntas} from './perguntas.js';
import { finalizarQuiz } from './painel.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { getFirestore, collection, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// Inicialize o Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDX7M6tEyXnTHA-JhkJ121fMkDynffPwnE",
  authDomain: "estudos-correios.firebaseapp.com",
  projectId: "estudos-correios",
  storageBucket: "estudos-correios.firebasestorage.app",
  messagingSenderId: "29959473192",
  appId: "1:29959473192:web:a4f0c081fe9841d7200d1d",
  measurementId: "G-EF842TK2WC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



// Variável para armazenar a pontuação
const pontuacao = {
  total: 0,
  nivelAtual: 1,
};

// Nível inicial do usuário
const nivelAtual = 1

const checarResposta = (indiceResposta, perguntaAtual) => {
  // Verifica se a pergunta atual existe
  if (!perguntaAtual) {
    console.error("Pergunta atual não definida.");
    return false;
  }

  const respostaCorreta = perguntaAtual.respostaCorreta;

  if (respostaCorreta === undefined) {
    console.error("Resposta correta não definida.");
    return false;
  }

  console.log("Índice da resposta correta:", perguntaAtual.respostaCorreta); // Verificação do índice correto
  console.log("Índice da resposta escolhida:", indiceResposta); // Verificação do índice escolhido
  console.log("Agrupando perguntas para o nível:", nivelAtual); // Verificação do nível

  return indiceResposta === respostaCorreta;


};

const calcularNivel = (historicoRespostas) => {
  const acertos = historicoRespostas.reduce((total, resposta) => 
    resposta === true ? total + 1 : total, 0);
    
  const novoNivel = Math.min(1 + Math.floor(acertos / 5), 3); // Aumenta o nível a cada 5 acertos, até o nível 3
   return novoNivel;
 };

// Função para agrupar perguntas por nível
const agruparPorNivel = (perguntas) => {
  console.log("Agrupando perguntas para o nível:", nivelAtual); // Verificação do nível
  const agregar = (perguntas, niveis = {}) => {
    if (perguntas.length === 0) {
      return niveis;
    }
    const [primeira, ...resto] = perguntas;
    const nivel = primeira.nivel;

    if (!niveis[nivel]) {
      niveis[nivel] = [];
    }
    niveis[nivel].push(primeira);
    return agregar(resto, niveis);
  };
  
  return agregar(perguntas);
};

  // Função para filtrar perguntas por tipo
  const filtrarPorTipo = (perguntas, tipo) => {
    return perguntas.filter(pergunta => pergunta.tipo === tipo);
  };


  
// Função para renderizar perguntas
const renderizarPergunta = (indice, historicoRespostas, nivelAtual, perguntasAgrupadas, tipo) => {
  const perguntasFiltradas = filtrarPorTipo(perguntasAgrupadas[nivelAtual], tipo);
  console.log("Perguntas filtradas:", perguntasFiltradas);

  if (perguntasFiltradas.length === 0) {
    console.log('Nenhuma pergunta encontrada para este tipo.');
    return;
  }

  //Verifica se os elementos pergunta e opcoes existem no HTML
  

// No carregamento da página, exiba a pontuação
window.onload = () => {
  exibirPontuacaoQuiz(); // Exibe a pontuação ao carregar a página
}
exibirPontuacaoQuiz()

console.log("Pontuação total:", pontuacao.total)
  
const exibirPergunta = (indice) => {
  // Filtra as perguntas para o nível atual e tipo selecionado
  const perguntasFiltradas = filtrarPorTipo(perguntasAgrupadas[nivelAtual], tipo);
  console.log("Perguntas filtradas:", perguntasFiltradas); // Para depuração

  // Verifica se há perguntas disponíveis para exibir
  if (indice >= 20 || indice >= perguntasFiltradas.length) {
    console.log("Nenhuma pergunta disponível para o tipo e nível atual.");
    atualizarPontuacao(tipo, pontuacao.total);
    atualizarPontuacaoQuiz(tipo, pontuacao.total)
    const quizFinalizado =  document.getElementById('pergunta').innerHTML = `Quiz finalizado! Sua pontuação neste quiz é: ${pontuacao.total}`; 
    const opcoesVazia = document.getElementById('opcoes').innerHTML = ''; // Limpa as opções
    finalizarQuiz(tipo, pontuacao.total);
    return opcoesVazia, quizFinalizado
  } else {

  // Caso ainda haja perguntas e o limite não foi atingido, exibe a pergunta
  const perguntaDiv = document.getElementById('pergunta');
  const opcoesDiv = document.getElementById('opcoes');
  const perguntaAtual = perguntasFiltradas[indice];
  perguntaDiv.innerHTML = `<strong>Nível ${nivelAtual}</strong><br>${perguntaAtual.pergunta}`;
  opcoesDiv.innerHTML = ''; // Limpa as opções anteriores

  // Renderiza as opções de resposta
  renderizarOpcoes(perguntaAtual, indice, historicoRespostas, nivelAtual, perguntasAgrupadas, tipo);
  }
};

  exibirPergunta(indice);
};

// Função para exibir a pontuação
const exibirPontuacaoQuiz = () => {
  const pontuacaoElement = document.getElementById('pontuacaoquiz');

  if (pontuacaoElement) {
      pontuacaoElement.textContent = `Pontuação neste Quiz: ${pontuacao.total}`;
  }
};

// Função para renderizar opções de forma recursiva
const renderizarOpcoes = (perguntaAtual, perguntaIndice, historicoRespostas, nivelAtual, perguntasAgrupadas, tipo) => {
  const opcoesDiv = document.getElementById('opcoes');
  

  const renderizarRecursivo = (index) => {
    if (index < perguntaAtual.opcoes.length) {
      const botaoOpcao = document.createElement('button');
      botaoOpcao.innerText = perguntaAtual.opcoes[index];
      botaoOpcao.addEventListener('click', () => {
        // Passa a perguntaAtual diretamente para checarResposta
        const resposta = checarResposta(index, perguntaAtual);

        historicoRespostas.push(resposta); // Adiciona a resposta ao histórico

        if (resposta) {
          alert('Resposta correta!');
          console.log(`Atualizando pontuação para o nível: ${nivelAtual}`);
          const pontosPorNivel = { 1: 1, 2: 2, 3: 3 };
          const pontos = pontosPorNivel[nivelAtual] || 0;
          pontuacao.total += pontos; // Atualiza a pontuação total
        } else {
          alert(`Resposta errada. A correta era: ${perguntaAtual.opcoes[perguntaAtual.respostaCorreta]}`);
        }
        

        // Atualiza o nível do usuário baseado no desempenho
        const novoNivel = calcularNivel(historicoRespostas);
        

        // Incrementa o índice para a próxima pergunta
        const proximoIndice = perguntaIndice + 1;

        // Verifique se ainda há perguntas disponíveis
        const perguntasFiltradas = filtrarPorTipo(perguntasAgrupadas[nivelAtual], tipo);
        // Se o nível mudou, reinicia o índice para 0 do novo nível
        if (novoNivel !== nivelAtual) {
            // Verifica se há perguntas disponíveis para exibir
          renderizarPergunta(0, historicoRespostas, novoNivel, perguntasAgrupadas, tipo);
        } else {
          // Se o nível não mudou, continua para a próxima pergunta
          renderizarPergunta(proximoIndice, historicoRespostas, nivelAtual, perguntasAgrupadas, tipo);
        }
      });
      opcoesDiv.appendChild(botaoOpcao);
      renderizarRecursivo(index + 1); // Chama para o próximo índice
      
    }
  };

  renderizarRecursivo(0); // Inicia a renderização
};

// Array para armazenar o histórico de respostas
const historicoRespostas = [];

// Agrupa as perguntas por nível
const perguntasAgrupadas = agruparPorNivel(perguntas);

// Inicia o quiz exibindo a primeira pergunta

const renderizaHtml = (tipo) => { renderizarPergunta(0, historicoRespostas, nivelAtual, perguntasAgrupadas, tipo); }
export {renderizaHtml};

