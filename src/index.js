import { app, database } from './firebaseConfig.js';
//import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getModularInstance } from '@firebase/util';
 
    const collectionRef = collection(database, "users");

    const getDataButton = document.getElementById("getDocsButton");
    getDataButton.addEventListener("click", getData());

    const form = document.getElementById("formLogin");
    form.addEventListener("submit", loginForm);

    function getData(){
        getDocs(collectionRef)
            .then((response)=>{
                console.log(response.docs.map((item)=>{
                    return {...item.data(), id: item.id};
                }))
            });
    }

    function loginForm(event){
        console.log("loginForm");
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const data = {
            email: email,
            password: password
        }

        handleSubmit(data);

        form.reset();
    }

    function handleSubmit(data){
        console.log(data);
        addDoc(collectionRef, data)
            .then(()=>{
                alert("Data Added");
            })
            .catch((err)=> {
                alert(err.message)
            });
    }

    