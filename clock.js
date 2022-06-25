setInterval(setclock,1000)

const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function setclock(){
    const nowdate = new Date;
    const sR = nowdate.getSeconds()/60;
    const mR = (sR + nowdate.getMinutes())/60;
    const hR = ( mR + nowdate.getHours())/12;
    setrotation(hour,hR);
    setrotation(min,mR);
    setrotation(sec,sR);
}

function setrotation(ele,rR){
    ele.style.setProperty("--r",rR*360);
}

setclock();