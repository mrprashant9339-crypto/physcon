import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { doc, setDoc }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

window.signup = async () => {
  const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
  await setDoc(doc(db,"users",res.user.uid),{email:email.value,role:"user",created:new Date()});
  alert("Signup Success"); location.href="dashboard.html";
};

window.login = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value);
  alert("Login Success"); location.href="dashboard.html";
};