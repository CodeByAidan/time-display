// Create <div id="MyClockDisplay" class="clock" onload="showTime()"></div>
// Create div and id and class and onload function
// Remove all elements on screen

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    // Add Date
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var day = days[d.getDay()];
    var month = months[d.getMonth()];
    var date = d.getDate();
    var year = d.getFullYear();
    var fullDate = day + ", " + month + " " + date + ", " + year;
    document.getElementById("MyDateDisplay").textContent = fullDate;
    document.getElementById("MyDateDisplay").innerText = fullDate;
}

var div2 = document.createElement("div2");
div2.id ="MyDateDisplay";
div2.className = "date";

var div = document.createElement("div");
div.id = "MyClockDisplay";
div.className = "clock";
// Append div to body
document.body.appendChild(div);
document.body.appendChild(div2);

// Remove all elements but div and div2
var elements = document.body.children;
for (var i = 0; i < elements.length; i++) {
    if (elements[i].id != "MyClockDisplay" && elements[i].id != "MyDateDisplay") {
        elements[i].parentNode.removeChild(elements[i]);
    }
}

showTime();
// Add CSS to style clock
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
body {
    background: black;
}
.clock {
    font-size: 20px;
    font-weight: bold;
    font-family: Orbitron;
    text-align: center;
    background: #000;
    color: #17D4FE;
    padding: 10px;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 0 10px #000;
}
.date {
    display: block;
    font-size: 20px;
    font-weight: bold;
    font-family: Orbitron;
    text-align: center;
    background: #000;
    color: #17D4FE;
    padding: 10px;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 0 10px #000;
}
`;
document.getElementsByTagName('head')[0].appendChild(style);

// remove the extra div and div2
var elements = document.body.children;
for (var i = 0; i < elements.length; i++) {
    if (elements[i].id != "MyClockDisplay" && elements[i].id != "MyDateDisplay") {
        elements[i].parentNode.removeChild(elements[i]);
    }
}
