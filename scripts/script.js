// scripts/script.js

// Importar as bibliotecas necessárias do Firebase
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

// Funções de registro e login
const registrarUsuario = async (email, senha) => {
  try {
    const usuario = await createUserWithEmailAndPassword(auth, email, senha);
    console.log("Usuário registrado:", usuario);
    const usuarioId = usuario.user.uid;
    const dados = { nome: "Nome do Usuário", pontuacao: 100 };
    await armazenarDadosUsuario(usuarioId, dados);
  } catch (error) {
    console.error("Erro ao registrar:", error);
  }
};

const loginUsuario = async (email, senha) => {
  try {
    const usuario = await signInWithEmailAndPassword(auth, email, senha);
    console.log("Usuário logado:", usuario);
    const usuarioId = usuario.user.uid;
    await recuperarDadosUsuario(usuarioId);
  } catch (error) {
    console.error("Erro ao logar:", error);
  }
};

const armazenarDadosUsuario = async (usuarioId, dados) => {
  try {
    await setDoc(doc(db, "usuarios", usuarioId), dados);
    console.log("Dados do usuário armazenados:", dados);
  } catch (error) {
    console.error("Erro ao armazenar dados:", error);
  }
};

const recuperarDadosUsuario = async (usuarioId) => {
  try {
    const docRef = doc(db, "usuarios", usuarioId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Dados do usuário:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("Nenhum dado encontrado!");
    }
  } catch (error) {
    console.error("Erro ao recuperar dados:", error);
  }
};

// Manipulação do formulário de login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita o envio do formulário padrão
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  loginUsuario(email, senha);
});


const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita o envio do formulário padrão
  const email = document.getElementById('registerEmail').value;
  const senha = document.getElementById('registerSenha').value;
  registrarUsuario(email, senha);
});
