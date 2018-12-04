function submit_availability(){
    "use strict";

    const db = firebase.database();

    let day = document.getElementById('days');
    let submitBtn = document.getElementById('submit');
    let checkbox = document.getElementById('checkbox');
    let checkmark = document.getElementById('checkmark');

    checkbox.addEventListener('change', function() {

        var what_day = day.value;

        if(this.checked){

            var time = this.checked
            console.log(what_day + ", " + time + " was clicked!");
            var query = "availability_fall_2018/days/" + what_day + "/" + time;

            db.ref(query)

            .catch((e) =>{
                console.log (e);
            });
        }
    });
}