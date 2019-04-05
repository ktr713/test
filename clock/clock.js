openWindow();

clock();

function openWindow(){
    const electron = require("electron");
    const app = electron.app;
    const remote = electron.remote;
    const win = remote.getCurrentWindow();
    alert("open called");

    
    if(localStorage.getItem("windowPosition")){
        const pos = JSON.parse(localStorage.getItem("windowPosition"));
        win.setPosition(pos[0],pos[1]);
    }
    else{
        alert("!get called");
    }

    win.on("will-quit",function(){
        alert("set called");
        localStorage.setItem("windowPosition",JSON.stringify(win.getPosition()));
    });

    win.show();
}

function clock(){
    var d = new Date();

    updateDigitalClock(d);

    var delay = 1000 - new Date().getMilliseconds();
    setTimeout(clock,delay);
}

function updateDigitalClock(d){
    var AA_str = ["SUN","MON","TUE","WEN","THU","FRI","SAT"];
    var YY = d.getFullYear().toString().slice(-2);
    var MM = d.getMonth() + 1;
    var DD = d.getDate();
    var AA = d.getDay();
    var hh = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();

if(MM<10){MM = "0" + MM;}
if(DD<10){DD = "0" + DD;}
if(hh<10){hh = "0" + hh;}
if(mm<10){mm = "0" + mm;}
if(ss<10){ss = "0" + ss;}

var text = YY + '/' + MM + '/' + DD + ' (' + AA_str[AA] + ')<br>' + hh + ':' + mm + ':' + ss
document.getElementById("digital_clock").innerHTML = text;
}
