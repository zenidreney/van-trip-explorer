import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpzJWPy8NJMR2uosdqkYkjPjkZu1Tvndw",
    authDomain: "vanlife-7f797.firebaseapp.com",
    projectId: "vanlife-7f797",
    storageBucket: "vanlife-7f797.firebasestorage.app",
    messagingSenderId: "266108481011",
    appId: "1:266108481011:web:8dcefc2c97a44db814b686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollection = collection(db, "vans")

export async function getApiObject() {


    const snapshot = await getDocs(vansCollection)
    const snapshotData = snapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })

    console.log(snapshotData)

}

export async function getVan(id: number) {
    const docRef = doc(db, "vans", id.toString())

    const snapshot = await getDoc(docRef)

    const singleVan = {
        ...snapshot.data(),
        id: snapshot.id
    }

    console.log(singleVan)
}