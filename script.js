setInterval(timeDisp, 1000);
var myAlarmSong = new Audio("alarmsong2.mp3");

// const date (line 7) and alarmTime (line 18)both represent new Date(), which displays the current date.

function timeDisp(){
    const date = new Date();

    const hour = (date.getHours());
    const minutes = (date.getMinutes());
    const seconds = (date.getSeconds());
    showtime.innerHTML = `${hour} : ${minutes} : ${seconds}`
}

function setAlarm(){
    let alarmHrs = hours.value;
    let alarmMin = mins.value;
    alarmTime = new Date();

    if(alarmHrs == alarmTime.getHours() && alarmMin == alarmTime.getMinutes()){
        myAlarmSong.play()
    }
    if((hours.value !== "")&&(mins.value !== "")){
        disp.innerHTML = "Alarm Set😎"
        disp.style.color = "green"
    }
    else if((hours.value == "")&&(mins.value == "")){
        disp.innerHTML = "No time is set for alarm!"
        disp.style.color = "red"
    }
    setInterval("setAlarm()",1000);
}

function myQuestion(){
        alert("Answer this question")
        var wake = prompt("What is 10*10?")
        if(wake == "100"){
            location.reload()
            alert("Alarm Off")
        }
        else if(wake !=="100"){
            alert("Wrong")
        }
}