// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBswIkUZXB74FDBRKC8Ui1gC-d0l9zuOwc",
  authDomain: "malde-a480c.firebaseapp.com",
  projectId: "malde-a480c",
  storageBucket: "malde-a480c.appspot.com",
  messagingSenderId: "570254202659",
  appId: "1:570254202659:web:9dbae43a47df0931e31e96",
  measurementId: "G-YHYVRXMK6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;