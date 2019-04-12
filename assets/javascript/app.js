window.onload = function () {

  "use strict"; //Strict mode to avoid unreported errors

  var playerAnswers = [];

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
    time = 5; //TODO take this back to 60 once testing is done
    $("#display").text("01:00")
    intervalId = setInterval(count, 1000);
  }
  var count = function () {
    time--;
    console.log(time);
    if (time === 0) { 
      clearInterval(intervalId); 
      endGame();

    }
    var converted = timeConverter(time);
    $("#timer").text(converted);
  }

  start();

  $(document).on("click", ".group1", function(){
    console.log($(this).text());
    playerAnswers[0] = ($(this).text());
    console.log(playerAnswers);
  })
  $(document).on("click", ".group2", function(){
    console.log($(this).text());
    playerAnswers[1] = ($(this).text());
    console.log(playerAnswers);
  })
  $(document).on("click", ".group3", function(){
    console.log($(this).text());
    playerAnswers[2] = ($(this).text());
    console.log(playerAnswers);
  })
  $(document).on("click", ".group4", function(){
    console.log($(this).text());
    playerAnswers[3] = ($(this).text());
    console.log(playerAnswers);
  })

  var endGame = function(){
    // alert("Time's up!");  //TODO uncomment later

    var parent = document.getElementById("parent-of-columns");
    var child2 = document.getElementById("center-column");
    var child3 = document.getElementById("right-column");
    parent.removeChild(child2);
    parent.removeChild(child3); //remove the right column for centering



    var scoreScreen = document.createElement("div");
    scoreScreen.setAttribute("class", "col-lg-8 rounded");
    scoreScreen.setAttribute("id", "score-screen");
    scoreScreen.innerHTML = "Score Screen <p> You got X out of 4 correct!</p>"

    scoreScreen.setAttribute("text", "The Score");
    console.log(scoreScreen);
    

    $(".footer").remove();
    parent.appendChild(scoreScreen);



  }

}
