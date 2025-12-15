import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
  doc, setDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

window.signup = async () => {
  const email = email.value;
  const password = password.value;

  const res = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", res.user.uid), {
    email: email,
    role: "user",
    created: new Date()
  });

  window.location = "dashboard.html";
};

window.login = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value);
  window.location = "dashboard.html";
};
