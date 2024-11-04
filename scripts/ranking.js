import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';
import { exibirPontuacao, getUserId } from './pontuacao.js'; // Sua função para obter o ID do usuário

const db = getFirestore();

const obterRanking = async () => {
    const usuariosRef = collection(db, "usuarios"); // Referência à coleção de usuários
    const snapshot = await getDocs(usuariosRef); // Obtém todos os documentos na coleção

    // Verificar se documentos foram encontrados
    if (snapshot.empty) {
        console.log("Nenhum documento encontrado na coleção 'usuarios'.");
        return [];
    }

    // Armazenar dados dos usuários usando map
    const ranking = snapshot.docs.map(doc => {
        const usuarioData = doc.data();
        const pontuacaoTotal = calcularPontuacaoTotal(usuarioData.progresso); // Função para calcular a pontuação total
        return { id: doc.id, ...usuarioData, pontuacao: pontuacaoTotal };
    });

    // Log dos dados obtidos para depuração
    console.log("Ranking obtido:", ranking);

    // Ordenar por pontuação total em ordem decrescente
    return ranking.sort((a, b) => b.pontuacao - a.pontuacao);
};

// Função para calcular a pontuação total
const calcularPontuacaoTotal = (progresso) => {
    if (!progresso) {
        console.warn("Progresso não definido. Usando pontuação total como 0.");
        return 0; // Retorna 0 se o progresso não estiver definido
    }

    return Object.values(progresso).reduce((acc, cur) => acc + cur, 0);
};

const exibirRanking = async () => {
  const ranking = await obterRanking();
  
  const rankingTabela = document.getElementById('rankingTabela').getElementsByTagName('tbody')[0];
  rankingTabela.innerHTML = ''; // Limpar tabela existente

  // Verificar se o ranking tem dados antes de popular a tabela
  if (ranking.length === 0) {
      console.log("Nenhum dado disponível para exibir no ranking.");
      return;
  }

  // Limitar a exibição a 10 usuários
  const rankingLimitado = ranking.slice(0, 10);

  // Usando map para criar linhas da tabela
  rankingLimitado.map((usuario, index) => {
      const row = rankingTabela.insertRow();
      const cellRank = row.insertCell(0);
      const cellUsuario = row.insertCell(1);
      const cellPontuacao = row.insertCell(2);

      cellRank.textContent = index + 1; // Posição no ranking
      cellUsuario.textContent = usuario.nome; // Nome do usuário
      cellPontuacao.textContent = usuario.pontuacao; // Pontuação total
  });
};

// Chame a função ao carregar a página
window.onload = () => {
  exibirRanking();
  exibirPontuacao()
};