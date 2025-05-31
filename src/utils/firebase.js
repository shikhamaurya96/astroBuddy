
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSSRiN5yqhMyHrl-RVU35tenUzncZPIz8",
  authDomain: "womengpt.firebaseapp.com",
  projectId: "womengpt",
  storageBucket: "womengpt.firebasestorage.app",
  messagingSenderId: "966180207794",
  appId: "1:966180207794:web:cefb1b8ffe2291d04f1dab",
  measurementId: "G-3905JKRRHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
//const analytics = getAnalytics(app);