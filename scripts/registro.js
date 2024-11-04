// registro.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAuth, sendEmailVerification, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

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

const registrarUsuario = async (email, senha, nome) => {
    try {
        // Cria o usuário com email e senha
        const usuario = await createUserWithEmailAndPassword(auth, email, senha);
        console.log("Usuário registrado:", usuario);

        // Envia o e-mail de verificação
        await sendEmailVerification(usuario.user);
        console.log("E-mail de verificação enviado para:", usuario.user.email);
        alert("E-mail de verificação enviado! Verifique sua caixa de entrada para confirmar seu cadastro.");

        // Armazena os dados do usuário no Firestore
        const usuarioId = usuario.user.uid;
        const dados = { nome: nome, pontuacao: 0 }; // Inicialize a pontuação como 0 ou o que for apropriado
        await setDoc(doc(db, "usuarios", usuarioId), dados);
        console.log("Dados do usuário armazenados:", dados);

        // Desloga o usuário após o registro até que ele verifique o e-mail
        await auth.signOut();
        alert("Usuário registrado com sucesso! Verifique seu e-mail antes de fazer login.");
        // Não redireciona para login até que o e-mail seja verificado
    } catch (error) {
        console.error("Erro ao registrar:", error);
        alert("Erro ao registrar: " + error.message);
    }
};

// Evento de submissão do formulário de registro
const registroForm = document.getElementById('registroForm');
registroForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o envio do formulário padrão
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value; // Obtém o nome do usuário
    registrarUsuario(email, senha, nome);
});
