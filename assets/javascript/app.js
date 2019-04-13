window.onload = function () {

  "use strict"; //Strict mode to avoid unreported errors

  var playerAnswers = [];
  var playerScore = 0;

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
    time = 60;
    $("#display").text("01:00")
    intervalId = setInterval(count, 1000);
  }
  var count = function () {
    time--;
    // console.log(time);
    if (time === 0) {
      clearInterval(intervalId);
      endGame();

    }
    var converted = timeConverter(time);
    $("#timer").text(converted);
  }

  start();

  $(document).on("click", ".group1", function () {
    console.log($(this).text());
    playerAnswers[0] = ($(this).text());
    console.log(playerAnswers);
  })
  $(document).on("click", ".group2", function () {
    console.log($(this).text());
    playerAnswers[1] = ($(this).text());
    console.log(playerAnswers);
  })
  $(document).on("click", ".group3", function () {
    console.log($(this).text());
    playerAnswers[2] = ($(this).text());
    console.log(playerAnswers);
  })
  $(document).on("click", ".group4", function () {
    console.log($(this).text());
    playerAnswers[3] = ($(this).text());
    console.log(playerAnswers);
  })

  var endGame = function () {
    //calculate player score before anything else

    for (var i = 0; i < playerAnswers.length; i++) {
      switch (playerAnswers[i]) {
        case null:
          break;
        case "Lawnmower Man":
          playerScore++;
          break;
        case "Seattle":
          playerScore++;
          break;
        case "Lawrence Fishburne":
          playerScore++;
          break;
        case "Tron":
          playerScore++;
          break;
        default:
          break;
      }
    }
    

    alert("Time's up!");

    //clear 2 of the columns
    var parent = document.getElementById("parent-of-columns");
    var child2 = document.getElementById("center-column");
    var child3 = document.getElementById("right-column");
    parent.removeChild(child2);
    parent.removeChild(child3); //remove the right column for centering

    //creating the score screen

    var scoreScreen = document.createElement("div");
    scoreScreen.setAttribute("class", "col-lg-8 rounded");
    scoreScreen.setAttribute("id", "score-screen");
    scoreScreen.innerHTML = 
    
    "Score Screen" +
    "<p> You got " + playerScore.toString() + " out of 4 correct!</p>" + 

    '<div class="container"><table class="table table-hover table-dark" ><thead><tr><th scope="col">Question</th><th scope="col">Correct Answer</th></tr></thead><tbody><tr><th scope="row">1</th><td>Lawnmower Man</td></tr><tr><th scope="row">2</th><td>Lawrence Fishburne</td></tr><tr><th scope="row">3</th><td>Seattle</td></tr><tr><th scope="row">4</th><td>Tron</td></tr></tbody></table ></div > ' +

    '<button type="button" class="btn btn-dark btn-block rounded-pill">Play Again?</button>'
    
    ;
    console.log(scoreScreen);


    $(".footer").remove();
    parent.appendChild(scoreScreen);



  }

}
