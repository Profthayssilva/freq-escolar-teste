import firebase from "firebase";

//inicialize seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyC1C4d_S08ycIWmwf_5Y3AZCRuLZwJ1MHM",
  authDomain: "frequenciaescolar-9ddad.firebaseapp.com",
  databaseURL: "https://frequenciaescolar-9ddad-default-rtdb.firebaseio.com",
  projectId: "frequenciaescolar-9ddad",
  storageBucket: "frequenciaescolar-9ddad.appspot.com",
  messagingSenderId: "755072633863",
  appId: "1:755072633863:web:bca01231a8ee0317132ea2"
};

if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig); 
  } 
export default firebase.database()
 
