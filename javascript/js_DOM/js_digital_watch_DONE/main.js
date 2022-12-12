function minCounter(){
    let time = new Date();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let msec = time.getMilliseconds();

    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("millisecond").innerHTML = msec;
}
setInterval(minCounter, 10);