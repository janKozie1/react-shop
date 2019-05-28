import firebase from 'firebase/app'

require('firebase/auth')
require('firebase/database')

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class Firebase {
    constructor() {
        this.app = firebase.initializeApp(config)
        //experimental
        this.auth = firebase.auth();
        this.databese = firebase.database();
    }
    getCategories = async() =>{
        let categories = await this.databese.ref('/categories').once('value',(snapshot)=>{
            return snapshot   
        })
        return categories;
    }
    createWithEmailAndPassword = (email,password)=>{
        this.auth.createUserWithEmailAndPassword(email,password)
    }
    signWithEmailAndPassword = (email,password)=>{
        this.auth.signInWithEmailAndPassword(email,password)
    }
    resetPassword = (email) => {
        this.auth.sendPasswordResetEmail(email)
    }
    updatePassword = (password) => {
        this.auth.updatePassword(password)
    }
    signOut = () => {
        this.auth.signOut();
    }

}

export default Firebase;