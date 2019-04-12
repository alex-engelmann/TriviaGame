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
    time = 15;
    $("#display").text("00:15")
    intervalId = setInterval(count, 1000);
  }
  var count = function () {
    time--;
    // console.log(time);
    if (time === 0) { clearInterval(intervalId); }
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

}
