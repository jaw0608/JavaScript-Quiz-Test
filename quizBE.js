var answers = ['B','B','C'];
var questions = ["Within how many minutes should an accident be reported to a supervisor?","1+1","3+1"];
var aChoice =["15 minutes","5","9"];
var bChoice = ["30 minutes","2","1"];
var cChoice= ["60 minutes","3","4"];
var index = 0;
var score=0;
function checkAnswerBE(ans) {
  if (answers[index]==ans){
    document.getElementById("answer"+ans).style.backgroundColor = "green";
    document.getElementById("answer"+ans).style.color = "white";
    score++;
    index++;
    console.log(true);
    setTimeout(function(){
      document.getElementById("answer"+ans).style.backgroundColor = "white";
      document.getElementById("answer"+ans).style.color = "purple";
        change()
    }, 2000);
    return true;
  }
  document.getElementById("answer"+ans).style.backgroundColor = "red";
  document.getElementById("answer"+ans).style.color = "white";
  index++;
  setTimeout(function(){
    document.getElementById("answer"+ans).style.backgroundColor = "white";
    document.getElementById("answer"+ans).style.color = "purple";
      change()
  }, 2000);
  console.log(false);
}

function percent(score) {
  var p = (score/questions.length)*100;
  console.log(p);
  return p;
}
function createQuiz() {
  var div = document.createElement("Div");
  var br = document.createElement("BR");
  var br2 = document.createElement("BR");
  div.id="quizDiv";
  var question = document.createElement("H2");
  question.id = "question";
  var H41 = document.createElement("H4");
  H41.id ="answerA";
  H41.class = "quizH4s";
  H41.setAttribute( "onClick", "javascript: checkAnswerBE('A');" );
  var H42 = document.createElement("H4");
  H42.id ="answerB";
  H42.class = "quizH4s";
  H42.setAttribute( "onClick", "javascript: checkAnswerBE('B');" );
  var H43 = document.createElement("H4");
  H43.id ="answerC";
  H43.class = "quizH4s";
  H43.setAttribute( "onClick", "javascript: checkAnswerBE('C');" );
  div.appendChild(question);
  div.appendChild(H41);
  div.appendChild(br);
  div.appendChild(H42);
  div.appendChild(br2);
  div.appendChild(H43);
  var x = document.getElementsByTagName("BODY")[0];
  x.appendChild(div)
  document.getElementById("question").innerHTML = questions[index];
  document.getElementById("answerA").innerHTML = aChoice[index];
  document.getElementById("answerB").innerHTML = bChoice[index];
  document.getElementById("answerC").innerHTML = cChoice[index];
  var q = document.getElementById("question");
  var bs = [document.getElementById("answerA"),document.getElementById("answerB"),document.getElementById("answerC")];
  css(q,bs);
}
function change() {
  if (index<questions.length) {
  document.getElementById("question").innerHTML = questions[index];
  document.getElementById("answerA").innerHTML = aChoice[index];
  document.getElementById("answerB").innerHTML = bChoice[index];
  document.getElementById("answerC").innerHTML = cChoice[index];
  }
  else {
    endQuiz();
  }
}

function css(question, H4s) {
  var d = document.getElementById("quizDiv");
  d.style.backgroundImage = "url('logo.png')";
  d.style.backgroundRepeat = "no-repeat";
  d.style.backgroundPosition = "50% 50%";
  d.style.backgroundSize = "100% 100%";
  d.style.backgroundColor=" hsla(100,0%,0%,0.20)";
  d.style.backgroundBlendMode="overlay";
  d.style.textAlign = "center";
  d.style.width ="50%";
  d.style.height = "250px";
  d.style.paddingBottom = "25px";
  d.style.margin = "auto";
  question.style.paddingTop = "15px";
  question.style.cursor = "default";
  question.style.color = "white";
  question.style.textAlign="center";
  question.style.fontWeight = "bolder";
  var i;
  console.log(H4s);
  for (i=0; i<H4s.length; i++) {
    H4s[i].style.width = "30%";
    H4s[i].style.margin = "auto";
    H4s[i].style.cursor = "pointer";
    H4s[i].style.color = "purple";
    H4s[i].style.fontFamily = "Arial,sans-serif";
    H4s[i].style.fontSize = "20px";
    H4s[i].style.backgroundColor = "white";
    H4s[i].style.marginBottom = "5px";
  }

}

function endQuiz() {
  document.getElementById("question").remove();
  document.getElementById("answerA").remove();
  document.getElementById("answerB").remove();
  document.getElementById("answerC").remove();
  var d = document.getElementById("quizDiv");
  var result = document.createElement("H2");
  result.id = "result";
  result.style.color = "purple";
  result.style.backgroundColor = "white";
  result.style.width = "50%";
  result.style.margin = "auto";
  result.style.cursor = "default";
  d.appendChild(result);
  document.getElementById("result").innerHTML = "You scored "+percent(score)+ "%";
}

//Makes the script run on load
document.addEventListener('DOMContentLoaded', function() {
    createQuiz();
}, false);

//Allows .remove function of an element
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
