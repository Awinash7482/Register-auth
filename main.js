const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC139bxBbOAeJBuDDxUuqbVphXGpU9h6Fs",
    authDomain: "auth-form-8e4e7.firebaseapp.com",
    projectId: "auth-form-8e4e7",
    storageBucket: "auth-form-8e4e7.appspot.com",
    messagingSenderId: "508370807230",
    appId: "1:508370807230:web:88471fdcf5ffb8b774f1ef"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // alert("invalid username or password");
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            alert("invalid username or password");
        });
}