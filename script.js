function myFunction() {
  var x = document.getElementById("denytext");
  if (x.innerHTML === "") {
    x.innerHTML = "Sorry, That text is AI generated. Try again";
  } else {
    x.innerHTML = "";
  }
}