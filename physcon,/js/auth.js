// js/auth.js
import { auth, googleProvider, githubProvider } from "./firebase.js";
import { signInWithPopup } 
  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const googleBtn = document.getElementById("googleBtn");
const githubBtn = document.getElementById("githubBtn");

if (googleBtn) {
  googleBtn.addEventListener("click", async (e) => {
    e.preventDefault(); // form submit na ho
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert("Logged in as " + user.email);
    } catch (err) {
      console.error(err);
      alert("Google login error: " + err.message);
    }
  });
}

if (githubBtn) {
  githubBtn.addEventListener("click", async (e) => {
    e.preventDefault(); // form submit na ho
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      alert("Logged in (GitHub): " + user.email);
    } catch (err) {
      console.error(err);
      alert("GitHub login error: " + err.message);
    }
  });
}