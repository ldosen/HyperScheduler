function find_subs(){
    "use strict";

    const db = firebase.database();

    let nextBtn = document.getElementById('next');
    let day = document.getElementById('day_select');
    let reg_times_display = document.getElementById('m_thru_f_times_container');
    let sat_times_display = document.getElementById('sat_times_container');
    let reg_times = document.getElementById('m_thru_f_times');
    let sat_times = document.getElementById('sat_times');
    let backBtn = document.getElementById('back');
    let subsBtn = document.getElementById('find_subs');

    nextBtn.addEventListener('click', () => {
        if (day.value === "Saturday"){
            sat_times_display.style.display = "block";
            reg_times_display.style.display ="none";
        }

        else{
            reg_times_display.style.display = "block";
            sat_times_display.style.display = "none";
        }
        nextBtn.style.display = "none";
        day.disabled = true;
        subsBtn.style.display = "inline-block";
        backBtn.disabled = false; 

    });

    backBtn.addEventListener('click', () =>{
        document.getElementById("who_avail").style.display="none"
        if(document.getElementById("who_avail").hasChildNodes){
            document.getElementById("who_avail").removeChild;
        }
        
        nextBtn.style.display = "inline-block";
        subsBtn.style.display = "none";
        backBtn.disabled = true;
        day.disabled = false;
        subsBtn.disabled = false;

        sat_times_display.style.display = "none";
        reg_times_display.style.display = "none";
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
            let text = document.createTextNode(data);
            p.appendChild(text);
            document.getElementById("who_avail").appendChild(p);

        })
        .catch((e) =>{
            console.log (e);
        });

        subsBtn.disabled = true;
        document.getElementById("who_avail").style.display="block"
    });
}

find_subs();