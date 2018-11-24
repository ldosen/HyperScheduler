function find_subs(){
    "use strict";

    const db = firebase.database();

    let nextBtn = document.getElementById('next');
    let day = document.getElementById('day_select');
    let reg_times = document.getElementById('m_thru_f_times');
    let sat_times = document.getElementById('sat_times');
    let backBtn = document.getElementById('back');
    let subsBtn = document.getElementById('find_subs');

    nextBtn.addEventListener('click', () => {
        if (day.value === "Saturday"){
            sat_times.style.display = "block";
            reg_times.style.display ="none";
        }

        else{
            reg_times.style.display = "block";
            sat_times.style.display = "none";
        }
        nextBtn.style.display = "none";
        subsBtn.style.display = "inline-block";
        backBtn.disabled = false; 

    });

    backBtn.addEventListener('click', () =>{
        nextBtn.style.display = "inline-block";
        subsBtn.style.display = "none";
        backBtn.disabled = true;

        sat_times.style.display = "none";
        reg_times.style.display = "none";
    })

    subsBtn.addEventListener('click', () =>{
        var what_day = day.value;

        if(sat_times.style.display === 'block'){
            var time = sat_times.value;
        }
        else{
            var time = reg_times.value;
        }

        var query = "availability_fall_2018/days/" + what_day + "/" + time;

        db.ref(query).once('value').then((snapshot) =>{
            var data = snapshot.val();
            let p = document.createElement('p');
            let text = document.createTextNode(data + " are availabile.");
            p.appendChild(text);
            document.body.appendChild(p);

        })
        .catch((e) =>{
            console.log (e);
        });
    });
}

find_subs();