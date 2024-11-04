// Importando o Firebase Auth
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

// Configurações do Firebase (substitua com suas próprias configurações)
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
const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
    // Inicialmente, não ocultamos o conteúdo até que a verificação de autenticação seja concluída
    const containerCursos = document.querySelector(".courses-container");

    // Verificando o estado de autenticação
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Exibe o email do usuário logado e mostra o conteúdo
            document.getElementById("usuarioInfo").textContent = `Bem-vindo, ${user.email}`;
            containerCursos.style.display = "block"; // Mostra o conteúdo dos cursos

            // Verifica no console se o usuário está logado
            console.log("Usuário está logado:", user);
        } else {
            // Se não estiver logado, redireciona para a página de login
            console.log("Nenhum usuário logado. Redirecionando para login...");
            window.location.href = "login.html";
        }
    });
});