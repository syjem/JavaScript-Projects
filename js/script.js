

function printTime () {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    document.getElementById("date").value = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);