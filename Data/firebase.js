
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { config } from "dotenv";

config({
  path: "./Data/config.env"
})

 const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId:process.env.appId,
  measurementId: process.env.measurementId
};


export const callfirebase =()=>{
  initializeApp(firebaseConfig);
}
