import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuGzrJDCXFyXNFfNTDWFb0LqfqEWYdziU",
  authDomain: "biblioteca-de-estudos-16b37.firebaseapp.com",
  projectId: "biblioteca-de-estudos-16b37",
  storageBucket: "biblioteca-de-estudos-16b37.appspot.com",
  messagingSenderId: "458591780002",
  appId: "1:458591780002:web:f3a65c1826728aa2d06bfb",
  measurementId: "G-M9G28NLS75"
};

  const firebaseApp = initializeApp(firebaseConfig);

  export const db = getFirestore(firebaseApp)

  export const tagsHtmlCollectionRef = collection(db, 'tagsHtml')
  export const propsCssCollectionRef = collection(db, 'propsCss')
  export const videosAulasCollectionRef = collection(db, 'videosAulas')
  export const videosDicasCollectionRef = collection(db, 'videosDicas')
  export const linksProfissionalCollectionRef = collection(db, 'linkProfissional')
  export const linksUtilidadesCollectionRef = collection(db, 'linksUtilidades')
  export const userCollectionRef = collection(db, 'user')