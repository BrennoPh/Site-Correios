import { getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';

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

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// Observa mudanças na autenticação do usuário
onAuthStateChanged(auth, (user) => {
    if (user) {
      // Usuário está logado, exibe o botão de logout
      logoutButton.style.display = "block";
    } else {
      // Usuário não está logado, oculta o botão de logout
      logoutButton.style.display = "none";
    }
  });

//   // Função de logout
// logoutButton.addEventListener("click", () => {
//     signOut(auth)
//       .then(() => {
//         // Redireciona para a página de login após o logout
//         window.location.href = "login.html";
//       })
//       .catch((error) => {
//         console.error("Erro ao deslogar:", error);
//       });
//   });


// Função de logout
document.getElementById("logoutButton").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // Redireciona para a página de login após o logout
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.error("Erro ao deslogar:", error);
        });
});
