window.onload = function () {

  "use strict"; //Strict mode to avoid unreported errors

  var questions = [
    "What 1992 movie based on a Stephen King novel featured a yard worker who became a cyber-villain?",
    'Who played the character "Morpheus" in the 1999 movie "The Matrix"?',
    "In what city does the movie WarGames take place?",
    "What classic movie introduced light cycles into the common imagination?"
  ];
  var options = [
    ["Lawnmower Man", "Leafblower Man", "Weedwacker Man", "Groundskeeper Man"],
    ["Cuba Gooding Jr", "Wesley Snipes", "Lawrence Fishburne", "Samuel L. Jackson"],
    ["Seattle", "Los Angeles", "Detroit", "Phoenix"],
    ["Tron", "Pron", "Apron", "Tran"]
  ];
  var answers = [0, 2, 0, 0];

  //Sets the movie image above the question

  // var myImage = $("<img>");
  // myImage.attr("src", "./assets/images/lawnmower.jpg");
  // myImage.attr("alt", "The Man");
  // $(".card-img-top").append(myImage);


  // //Makes the question button
  // var q = $("<button>");
  // q.addClass("btn btn-light btn-block disabled");
  // q.text(questions[0]);
  // $(".card-body").append(q)

  // //Makes the 4 options buttons

  // for (var i = 0; i < options.length; i++) {
  //   var o = $("<button>");
  //   o.addClass("btn btn-dark btn-block rounded-pill");

  //   if (options[0][i] === answers[i]) {
  //     o.iscorrect = true;
  //   }
  //   else {o.iscorrect = false}

  //   console.log(o.iscorrect);
  //   o.text(options[0][i]);

  //   $("#options-view").append(o)
  // }

  //A few functions to track time

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

  var intervalId;
  var time;

  var start = function () {
    time = 15;
    $("#display").text("00:15")
    intervalId = setInterval(count, 1000);
  }
  var count = function () {
    time--;
    console.log(time);
    if (time === 0) { clearInterval(intervalId); }
    var converted = timeConverter(time);
    $("#timer").text(converted);
  }

  start();


  //TODO Detect user click on a trivia answer

  // (".rounded-pill").on("click", decideCorrect());

  // var decideCorrect = function() {


  // }


  //TODO check if answer is correct

  //Update the interface
  //delete old and show new questions and answers - update text attribute


}
