import { app } from './firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

export default function App() {
   
    let auth = getAuth();
    const form = document.getElementById("formLogin");

    form.addEventListener("submit", loginForm);

    function loginForm(event){
        console.log("loginFOrm");
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
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response)=>{
                console.log(response.user);
            })
            .catch((err)=>{
                alert(err.message);
            })
    }

    App();


}