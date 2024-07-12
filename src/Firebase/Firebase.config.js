// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuq0bihm3CQa5J7MdmziujOxkkA4YvR2M",
  authDomain: "news-project-168db.firebaseapp.com",
  projectId: "news-project-168db",
  storageBucket: "news-project-168db.appspot.com",
  messagingSenderId: "963434102096",
  appId: "1:963434102096:web:89b3f41cfe992f53dd8055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;