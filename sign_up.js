function sign_up(){
    "use strict";

    const emailProvider = new firebase.auth.EmailAuthProvider();

let submit = document.getElementById('submit');
let password = document.getElementById('password');

submit.addEventListener('click', () =>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('fname').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() =>{
        firebase.auth().onAuthStateChanged(()=>{
            setUserName(name);
            window.location.href="./mainpage.html";
        });
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
});

password.addEventListener('keyup', ()=>{
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    if(password.value.match(lowerCaseLetters) && password.value.match(upperCaseLetters) && password.value.match(numbers) && password.value.length > 7){
        submit.disabled = false;
    }
    else{
        submit.disabled = true;
    }
});

password.addEventListener('keyup', (event)=>{
    const key = event.keyCode;

    if(key === 13){
        document.getElementById('signin').click();
    }
});

function setUserName(name){
    let user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    });
}
}

sign_up();