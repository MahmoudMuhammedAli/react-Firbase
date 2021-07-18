import firebase from "firebase/app"
import "firebase/auth"



const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_APP_ID,
    authDomain: process.env.REACT_APP_AUTH_DOM,
    projectId: process.env.REACT_APP_PROJID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET, 
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
})

export const auth = app.auth()
export default app