// 🔐 Firebase App + Auth imports (MODULE JS)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// 🔴 Firebase config (tumhara)
const firebaseConfig = {
  apiKey: "AIzaSyDVAJXcjhjXDUOTvCyv97a5M0N5vMOhd0g",
  authDomain: "physcon-web.firebaseapp.com",
  projectId: "physcon-web",
  storageBucket: "physcon-web.firebasestorage.app",
  messagingSenderId: "597364247516",
  appId: "1:597364247516:web:52f3f489dc1ca092661d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier(
  "recaptcha-container",
  { size: "normal" },
  auth
);

// Send OTP
window.sendOTP = function () {
  const phone = document.getElementById("phone").value;

  signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent");
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Verify OTP
window.verifyOTP = function () {
  const otp = document.getElementById("otp").value;

  window.confirmationResult.confirm(otp)
    .then(() => {
      alert("Login successful");
      window.location.href = "index.html";
    })
    .catch(() => {
      alert("Wrong OTP");
    });
};
