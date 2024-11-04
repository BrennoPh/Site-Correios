// login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Objeto global para armazenar o estado
export const estadoGlobal = {
    userId: null, // Inicialmente, userId é nulo
    email: null, // Inicialmente, email é nulo
    pontuacao: 0 // Inicialmente, pontuação é 0
};

// Função para armazenar o userId no Firestore
export const armazenarUserIdNoFirestore = async (user) => {
    estadoGlobal.userId = user.uid; // Armazena o UID do usuário no objeto global
    estadoGlobal.email = user.email; // Armazena o email do usuário no objeto global

    // Armazenar o userId no Firestore
    try {
        await setDoc(doc(db, "usuarios", estadoGlobal.userId), {
            email: estadoGlobal.email, // Usa o email armazenado no objeto global
            timestamp: new Date(), // Armazena a data de registro
            pontuacao: 0 // Inicializa a pontuação
        });
        console.log("userId armazenado no Firestore com sucesso.");
    } catch (error) {
        console.error("Erro ao armazenar o userId no Firestore:", error);
    }
};

// Função para atualizar a pontuação no Firestore
export const atualizarPontuacao = async (nivel) => {
    // Define a pontuação com base no nível
    const pontos = nivel === 1 ? 1 : nivel === 2 ? 2 : nivel === 3 ? 3 : 0;
    
    // Incrementa a pontuação atual
    estadoGlobal.pontuacao += pontos;

    try {
        await setDoc(doc(db, "usuarios", estadoGlobal.userId), {
            pontuacao: estadoGlobal.pontuacao // Armazena a nova pontuação
        }, { merge: true }); // Usa o merge para não sobrescrever outros dados
        console.log("Pontuação atualizada com sucesso:", estadoGlobal.pontuacao);
    } catch (error) {
        console.error("Erro ao atualizar a pontuação:", error);
    }
};