// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } 
  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVAJXcjhjXDUOTvCyv97a5M0N5vMOhd0g",
  authDomain: "physcon-web.firebaseapp.com",
  projectId: "physcon-web",
  storageBucket: "physcon-web.firebasestorage.app",
  messagingSenderId: "597364247516",
  appId: "1:597364247516:web:52f3f489dc1ca092661d19",
  measurementId: "G-QEXKT8MF7Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };