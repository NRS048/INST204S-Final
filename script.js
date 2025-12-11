function myFunction() {
  var ab = document.getElementById("appealButton")
  var db = document.getElementById("denyButton")
  var at = document.getElementById("appealtext")
  var dt = document.getElementById("denytext")

  if (dt.innerHTML === "") {
    dt.innerHTML = "Sorry, That text is AI generated. Try again";
  } else {
    dt.innerHTML = "";
  }
  //Make appeal field and buttons appear
  at.innerHTML = "Would you like to appeal this decision?"
  ab.style.display = "block"
  db.style.display = "block"
}

function appealText() {
  var ab = document.getElementById("appealButton")
  var db = document.getElementById("denyButton")
  var at = document.getElementById("appealtext")
  var dt = document.getElementById("denytext")


  at.innerHTML = "Our 99.99%* accurate checker flagged these parts of your input"
  ab.style.display = "none"
  db.style.display = "none"
  dt.innerHTML = ""
}

function denyText() {
  var ab = document.getElementById("appealButton")
  var db = document.getElementById("denyButton")
  var at = document.getElementById("appealtext")
  var dt = document.getElementById("denytext")

  at.innerHTML = "Good boy. Take the 0%"
  ab.style.display = "none"
  db.style.display = "none"
  dt.innerHTML = ""
}
