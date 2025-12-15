import { db } from "./firebase.js";
import { collection, getDocs }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const snap = await getDocs(collection(db,"users"));
snap.forEach(d=> list.innerHTML += `<li>${d.data().email}</li>`);