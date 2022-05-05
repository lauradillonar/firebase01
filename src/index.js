import { app } from './firebaseConfig.js';
//import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


   
    let auth = getAuth(app);
    let googleProvider = new GoogleAuthProvider();
    const form = document.getElementById("formLogin");

    form.addEventListener("submit", loginForm);

    function loginForm(event){
        console.log("loginForm");
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const data = {
            email: email,
            password: password
        }

        console.log(data);

        handleSubmit(data);

        form.reset();
    }

    function handleSubmit(data){
        signInWithPopup(auth, googleProvider)
            .then((response)=>{
                console.log(response.user);
            })
            .catch((err)=>{
                alert(err.message);
            })
    }

