function submitField() {
  var ab = document.getElementById("appealButton")
  var db = document.getElementById("denyButton")
  var at = document.getElementById("appealText")
  var dt = document.getElementById("denyText")

  dt.innerHTML = "Sorry, the use of one of the vowels a, e, i, o, or u, have also been seen in 21,065 scholarly artiles. Try again.";

  //Make appeal field and buttons appear
  at.innerHTML = "Would you like to appeal this decision?"
  ab.style.display = "block"
  db.style.display = "block"
}

function benefitText() { // "appeal" actually shows the benefits of AI
  var ab = document.getElementById("appealButton")
  var db = document.getElementById("denyButton")
  var at = document.getElementById("appealText")
  var dt = document.getElementById("denyText")
  var ss = document.getElementById("studentState")

  if( ss.checked == true){ // if student
    at.innerHTML = "<div id='goodBadText'><p>The benefits of AI detectors for students</p></div><ul><li>AI detectors act as deterrents. Students are encouraged to form original work and thoughts rather than relying on AI. This allows students to develop important critical thinking skills and become less reliant on an imperfect AI. AI detectors promote actually formulating one's own thoughts rather than becoming reliant on what a piece of technology  thinks.</li><li>Allows the verification of a student's sources, to ensure the information is trustworthy.</li><li>Allows students to check other students' work in a group project setting.</li></ul>"
  } else { // if professor
    at.innerHTML = "<div id='goodBadText'><p>The benefits of AI detectors for professors</p></div><ul><li>Accurate AI checkers ensure that students submit original work. Students will focus on using their own thoughts and knowledge rather than relying on AI if the students know that their work will be flagged by an AI Checker.</li><li>Reduces an instructor's workload by eliminating unoriginal work.</li></ul>"
  }

  ab.style.display = "none"
  db.style.display = "none"
  dt.innerHTML = ""
}

function drawbackText() { // shows the flaws
  var ab = document.getElementById("appealButton")
  var db = document.getElementById("denyButton")
  var at = document.getElementById("appealText")
  var dt = document.getElementById("denyText")
  var ss = document.getElementById("studentState")

  if( ss.checked == true){ // if student
    at.innerHTML = "<div id='goodBadText'><p>The drawbacks of AI detectors for students</p></div><ul><li>AI detection is not foolproof. AI detectors have high error rates and can lead to false accusations against students.</li><li>False positives incorrectly flag content written by humans as having been written by an AI tool. These accusations of academic dishonesty have serious repercussions on a student's academic record if students are not able to defend themselves.</li><li>The best AI detectors report rates of around 1-2% if false positives. While this may sound like a small number, one must consider the scale on which these tools are used. At an institution with 25,000, if 1% of assignments were flagged as AI-generated when they were not, there are 250 false accusations. You'd think it doesn't matter until it's you who has to fight against the allegations</li><li>Neurodivergent students and students whose English is their second language are often flagged by AI detection at higher rates.</li></ul>"
  } else { // if professor
    at.innerHTML = "<div id='goodBadText'><p>The drawbacks of AI detectors for professors</p></div><ul><li>False negatives fail to identify documents that do contain AI-generated text. These are as a result of users intentionally avoiding techniques to make text sound like it was written by a human.</li><li>Taking an AI detector at face value could result in a completely legitimate work being flagged for AI when none was used. AI detectors could promote instructors to take the “easy” route and eliminate work that is original.</li><li>AI detectors become less accurate when students begin to use evasive techniques to get around AI detection. This is done by paraphrasing or manually manipulating AI generated text.</li></ul>"
  }

  ab.style.display = "none"
  db.style.display = "none"
  dt.innerHTML = ""
}

function resetField() {
  var ab = document.getElementById("appealButton")
  var db = document.getElementById("denyButton")
  var at = document.getElementById("appealText")
  var dt = document.getElementById("denyText")
  var tf = document.getElementById("textField")
  
  at.innerHTML = ""
  ab.style.display = "none"
  db.style.display = "none"
  dt.innerHTML = ""
  tf.value = ""
}