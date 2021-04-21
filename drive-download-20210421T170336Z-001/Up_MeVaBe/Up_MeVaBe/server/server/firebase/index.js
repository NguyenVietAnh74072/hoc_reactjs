import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBqBD59W-1UrtNQNMJiondtHlQLcpJeR-E",
  authDomain: "mevabe-80e93.firebaseapp.com",
  projectId: "mevabe-80e93",
  storageBucket: "mevabe-80e93.appspot.com",
  messagingSenderId: "71617995318",
  appId: "1:71617995318:web:e63a9e0acb21f07bc56e97",
  measurementId: "G-7THXRSVLV5"
};


firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {storage , firebase as default}
