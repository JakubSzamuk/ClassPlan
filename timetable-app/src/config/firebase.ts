import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCJU02XfAWJWdajEJ9kW-zl5S1GajaoJLM",
  authDomain: "timetableapp-171da.firebaseapp.com",
  // authDomain: "localhost:5173",
  projectId: "timetableapp-171da",
  storageBucket: "timetableapp-171da.appspot.com",
  messagingSenderId: "1007995901333",
  appId: "1:1007995901333:web:e8a87555daf68fc3ee129c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)