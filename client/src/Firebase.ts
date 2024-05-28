import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9mwJcsvOf-ngAyPFaOmNXezqHN1H5omM",
  authDomain: "walnut-01.firebaseapp.com",
  projectId: "walnut-01",
  storageBucket: "walnut-01.appspot.com",
  messagingSenderId: "126533544374",
  appId: "1:126533544374:web:ea4de0dc5f333849e6f917"
};

const app = initializeApp(firebaseConfig);
export const ImageDB = getStorage(app);

