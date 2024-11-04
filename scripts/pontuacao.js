import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

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


const getUserId = async () => {
    const user = auth.currentUser; // Obtém o usuário atual
    return user ? user.uid : null; // Retorna o ID ou null
};

// Listener para monitorar o estado de autenticação
auth.onAuthStateChanged(async (user) => {
    if (user) {
        console.log("Usuário autenticado:", user.uid);
        // Aqui você pode chamar suas funções que dependem do userId
        await exibirPontuacao(); // Exibir pontuação assim que o usuário estiver autenticado
    } else {
        console.log("Usuário não autenticado");
    }
});

// Função para calcular a pontuação total
const calcularPontuacaoTotal = (progresso) => {
    if (!progresso) {
        console.warn("Progresso não definido. Usando pontuação total como 0.");
        return 0; // Retorna 0 se o progresso não estiver definido
    }
    return Object.values(progresso).reduce((acc, cur) => acc + cur, 0);
};

const atualizarPontuacao = async (tipoQuiz, pontos) => {
    const userId = await getUserId();
    console.log(`User ID: ${userId}`); // Verifique o userId

    if (!userId) {
        console.error("Usuário não identificado.");
        return;
    }

    const docRef = doc(db, 'usuarios', userId);
    const docSnap = await getDoc(docRef);
    console.log(`Documento encontrado: ${docSnap.exists()}`); // Verifique se o documento existe

    // Inicializa o progresso padrão
    const progressoInicial = {
        pureza: 0,
        imutabilidade: 0,
        altaOrdem: 0,
        recursividade: 0,
        currying: 0,
        compFuncao: 0,
    };

    // Obtém o progresso existente ou usa o padrão
    const progresso = docSnap.exists() ? docSnap.data().progresso || progressoInicial : progressoInicial;

    // Atualiza a pontuação para o tipo de quiz atual
    progresso[tipoQuiz] = pontos; // Substitui a pontuação anterior do tipo específico

    // Calcula a pontuação total
    const pontuacaoTotal = calcularPontuacaoTotal(progresso);

    // Salva o progresso e a pontuação total no Firestore
    await setDoc(docRef, { progresso, pontuacao: pontuacaoTotal }, { merge: true });
    console.log(`Progresso e pontuação atualizados: ${JSON.stringify(progresso)}, Pontuação total: ${pontuacaoTotal}`);

    await exibirPontuacao();
};

// Função para exibir a pontuação do usuário
const exibirPontuacao = async () => {
  const userId = await getUserId();
  if (!userId) {
      console.error("Usuário não foi identificado.");
      return;
  }

  const docRef = doc(db, 'usuarios', userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      const pontuacao = docSnap.data().pontuacao || 0;
      const pontuacaoElement = document.getElementById('pontuacao');
      if (pontuacaoElement) {
          pontuacaoElement.textContent = `Sua Pontuação do Site: ${pontuacao}`;
          return 
      } else {
          console.error("Elemento para exibir a pontuação não encontrado.");
      }
  } else {
      console.log("Usuário ainda não possui pontuação.");
      const pontuacaoElement = document.getElementById('pontuacao');
      if (pontuacaoElement) {
          pontuacaoElement.textContent = `Sua Pontuação: 0`;
      }
  }
};

const atualizarPontuacaoQuiz = async (tipoQuiz, pontuacaoAtualQuiz) => {
    const userId = await getUserId();
    if (!userId) {
        console.error("Usuário não identificado.");
        return;
    }
  
    // Verifica se o documento do usuário já existe no Firestore
    const docRef = doc(db, 'usuarios', userId);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
        const progressoUsuario = docSnap.data().progresso || {}; // Obtém o progresso existente ou cria um objeto vazio
  
        // Atualiza o progresso apenas para o quiz específico (substituindo a pontuação anterior)
        progressoUsuario[tipoQuiz] = pontuacaoAtualQuiz;
  
        // Salva o progresso atualizado no Firestore
        await setDoc(docRef, { progresso: progressoUsuario }, { merge: true });
        console.log(`Pontuação atualizada para o quiz ${tipoQuiz}: ${pontuacaoAtualQuiz}`);
    } else {
        // Se o documento do usuário não existir, cria um novo com a pontuação inicial
        const progressoUsuario = { [tipoQuiz]: pontuacaoAtualQuiz };
        await setDoc(docRef, { progresso: progressoUsuario });
        console.log(`Documento criado com pontuação para o quiz ${tipoQuiz}: ${pontuacaoAtualQuiz}`);
    }
    
    // Exibe a pontuação ou chama outras funções relacionadas após a atualização
    await exibirPontuacao();
  };


export {atualizarPontuacao,atualizarPontuacaoQuiz, getUserId, exibirPontuacao};

