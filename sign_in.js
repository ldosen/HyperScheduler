function sign_in() {

    const emailProvider = new firebase.auth.EmailAuthProvider();

    let submit = document.getElementById('signin');

    submit.addEventListener('click', ()=>{
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            firebase.auth().onAuthStateChanged(()=>{
                window.location.href = "./mainpage.html";
            })
        })
        .catch(function(error){
            var errorMessage = error.message;
            console.log(errorMessage);
        })
    })
}

sign_in();