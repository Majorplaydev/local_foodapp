import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvRhLbWWGI130lbRXy2R2_XlNDhz2RgDA",
  authDomain: "localfood-ec472.firebaseapp.com",
  databaseURL: "https://localfood-ec472-default-rtdb.firebaseio.com",
  projectId: "localfood-ec472",
  storageBucket: "localfood-ec472.appspot.com",
  messagingSenderId: "169816941454",
  appId: "1:169816941454:web:5335649514e5c50754fadf",
  measurementId: "G-DNLG02M9Q0"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
