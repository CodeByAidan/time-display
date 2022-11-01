// Create <div id="MyClockDisplay" class="clock" onload="showTime()"></div>
// Create div and id and class and onload function
// Remove all elements on screen

function showTime() {
  var date = new Date();
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(); // 0 - 23
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); // 0 - 59
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); // 0 - 59
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? hours : hours;
  time = hours + ":" + minutes + ":" + seconds + " " + am_pm;

  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
  // Add Date
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var day = days[d.getDay()];
  var month = months[d.getMonth()];
  var date = d.getDate();
  var year = d.getFullYear();
  var fullDate = day + ", " + month + " " + date + ", " + year;
  document.getElementById("MyDateDisplay").textContent = fullDate;
  document.getElementById("MyDateDisplay").innerText = fullDate;
}

var div2 = document.createElement("div2");
div2.id = "MyDateDisplay";
div2.className = "date";

var div = document.createElement("div");
div.id = "MyClockDisplay";
div.className = "clock";
// Append div to body
document.body.appendChild(div);
document.body.appendChild(div2);

// // Remove all elements but div and div2
// var elements = document.body.children;
// for (var i = 0; i < elements.length; i++) {
//   if (elements[i].id !== "MyClockDisplay" && elements[i].id !== "MyDateDisplay") {
//     elements[i].parentNode.removeChild(elements[i]);
//   }
// }

showTime();
// Add CSS to style clock
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = `
body {

}
.clock {
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.725);
  position: fixed;
  font-size: 20px;
  font-weight: bold;
  font-family: Orbitron;
  text-align: center;
  color: rgba(23, 212, 254, 1.0);
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.725);
  top: 100px;
}

.date {
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.725);
  position: fixed;
  display: block;
  font-size: 20px;
  font-weight: bold;
  font-family: Orbitron;
  text-align: center;
  color: rgba(23, 212, 254, 1.0);
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.725);
  top: 42.5px;
}
`;
document.getElementsByTagName("head")[0].appendChild(style);
// // remove the extra div and div2
// var elements = document.body.children;
// for (var i = 0; i < elements.length; i++) {
//   if (elements[i].id != "MyClockDisplay" && elements[i].id != "MyDateDisplay") {
//     elements[i].parentNode.removeChild(elements[i]);
//   }
// }
