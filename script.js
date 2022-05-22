
var count = sessionStorage.getItem("#qCount");
var userName = localStorage.getItem("#user");
var score = 0;
var userName = prompt("Please enter your name", "akshay kadam");
localStorage.clear();
function validateForm(){

  getScore();
  displayScores();
  doSomething();
  highScoreUserName();
  checkChecked();
}

function getScore() {
  score = 0;
  var a = document.forms["quiz"]["Q1"].value;
  var b = document.forms["quiz"]["Q2"].value;
  var c = document.forms["quiz"]["Q3"].value;
  var d = document.forms["quiz"]["Q4"].value;
  var e = document.forms["quiz"]["Q5"].value;
    if (a == 'Q13') {
        score++;
    }
    if (b == 'Q22') {
        score++;
    }
    if ( c == 'Q32') {
        score++;
    }
    if (d == 'Q43') {
        score++;
    }
    if (e == 'Q53' ) {
        score++;
    }
return score;
}

function displayScores(){
  $('#submitted').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 3000);
  $('#newScore').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 3000);
document.getElementById("numCorrect").innerHTML = "You scored " + score + " out of 5";
document.getElementById("finished").innerHTML = "RESULTS: You scored "+ score + " out of 5";

return null;
}

function highScoreUserName(){


if (typeof localStorage !== 'undefined'){
  var s = localStorage.getItem("#storedScore");
  if (score+1 > s){
    $('#finalScore').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);
    localStorage.setItem("#storedScore",score);
    localStorage.setItem("#user",score);
    document.getElementById("highScore").innerHTML = "Thats your best score!";
    $('#finalScore').css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 3000);
  }
  else if(score < s){
    document.getElementById("finalScore").style.visibility = "hidden";
  }
}
else{
  alert("Local Storage is disabled. Highscores will not be saved.");
}
return null;
}

function checkChecked(){
  if (count < 5){
    alert("You have missed a question(s)");
  }
  else if (count == 5){
    sessionStorage.setItem("#qCount",'5');
  }
  return null;
}

function doSomething(){
count++;
}
