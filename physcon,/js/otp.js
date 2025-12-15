import { auth } from "./firebase.js";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

window.recaptchaVerifier = new RecaptchaVerifier(
  auth,
  'recaptcha',
  { size: 'normal' }
);

window.sendOTP = async () => {
  window.confirmationResult =
    await signInWithPhoneNumber(auth, phone.value, window.recaptchaVerifier);
  alert("OTP Sent");
};

window.verifyOTP = async () => {
  await window.confirmationResult.confirm(otp.value);
  window.location = "dashboard.html";
};
