import firebase from "firebase/app"
import "firebase/auth"



const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOM,
    // projectId: process.env.REACT_APP_PROJID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET, 
    // messagingSenderId: process.env.REACT_APP_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyAGPX-na5Ur10-ptcVoY3yyx6tsWOyXGdk",
    authDomain: "fire-tut-2ffcd.firebaseapp.com",
    projectId: "fire-tut-2ffcd",
    storageBucket: "fire-tut-2ffcd.appspot.com",
    messagingSenderId: "82817090746",
    appId: "1:82817090746:web:505ec349e95bf644b6ae83"
})

export const auth = app.auth()
export default app