function submit_availability(){
    const db = firebase.database();

    var user = firebase.auth().currentUser;
    if(user != null) {
        user.providerData.forEach(function (profile) {
            console.log("name: " + profile.displayName);
            var name = user.displayName;
        });
    }
    

    let submitBtn = document.getElementById('submit');
    let checkmark = document.getElementById('checkmark');
    var day = document.getElementById('days');
    var checkbox = document.getElementById('checkbox');
    var container = document.getElementById('container');
    var checkboxes = document.getElementsByTagName('input');

    console.log(day);

    submitBtn.addEventListener('click', function() {
        if(checkbox.checked){
        var what_day = day.textContent;
            var time = container.textContent;
            console.log(what_day + ", " + time + " was clicked!");
            var query = "availability_fall_2018/days/" + what_day + "/" + time;

            var r = db.ref(query);
            if(r.child(query) != name ){
            r.child(query).set(name)
            }
            r.catch((e) =>{
                console.log (e);
            });
        }
        alert("Congrats! Your Availability Has Been Updated!");
    });
}

submit_availability();