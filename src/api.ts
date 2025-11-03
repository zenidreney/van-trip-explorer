import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollection = collection(db, "vans")


export type Van = {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    type: string,
    description: string,
    hostId: string
}

export async function getAllVans(): Promise<Van[]> {


    const snapshot = await getDocs(vansCollection)
    const snapshotData = snapshot.docs.map(doc => {
        return {
            ...doc.data() as Omit<Van, "id">,
            id: doc.id
        }
    })

    console.log(snapshotData)

    return snapshotData

}

export async function getVan(id: string) {
    const docRef = doc(db, "vans", id.toString())

    const snapshot = await getDoc(docRef)

    const singleVan = {
        ...snapshot.data() as Omit<Van, "id">,
        id: snapshot.id
    }

    //console.log(singleVan)

    return singleVan
}