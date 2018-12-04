function sign_in() {
    "use strict";

    const emailProvider = new firebase.auth.EmailAuthProvider();

    let submit = document.getElementById('signin');
    let password = document.getElementById('password');

    submit.addEventListener('click', ()=>{
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            firebase.auth().onAuthStateChanged(()=>{
                window.location.href = "./mainpage.html";
            });
        })
        .catch(function(error){
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    });

    password.addEventListener('keyup', (event)=>{
        const key = event.keyCode;

        if(key === 13){
            document.getElementById('signin').click();
        }
    });
}

sign_in();