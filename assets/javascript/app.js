"use strict"; //Strict mode to avoid unreported errors

//will use this later for the timer
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

var questions = [
  "What 1992 movie based on a Stephen King novel featured a yard worker who became a cyber-villain?",
  'Who played the character "Morpheus" in the 1999 movie "The Matrix"?',
  "In what city does the movie WarGames take place?",
  "What classic movie introduced light cycles into the common imagination?"
];
var options = [
  ["Lawnmower Man", "Leafblower Man", "Weedwacker Man", "Groundskeeper Man"],
  [
    "Cuba Gooding Jr",
    "Wesley Snipes",
    "Lawrence Fishburne",
    "Samuel L. Jackson"
  ],
  ["Seattle", "Chicago", "Detroit", "Que"],
  ["Tron", "Pron", "Apron", "Tran"]
];
var answers = [0, 2, 0, 0];

//Sets the image above the question

// var img = $('<img src="./assets/images/lawnmower.jpg" alt="The Man"></img>');
// $(".card-img-top").append(img);


//Makes the question button
var q = $("<button>");
q.addClass("btn btn-light btn-block disabled");
q.text(questions[0]);
$(".card-body").append(q)

//Makes the 4 options buttons

for (var i = 0; i < options.length; i++){
var a = $("<button>");
a.addClass("btn btn-dark btn-block");

a.iscorrect = true; //TODO make this smarter by checking for true value
console.log(a.iscorrect);
a.text(options[0][i]);

$("#options-view").append(a)
}




//TODO Detect user click on a trivia answer

//TODO check if answer is correct

//Update the interface
//delete old and show new questions and answers - update text attribute
$("#timer").text("00:30");
