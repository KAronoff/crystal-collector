$(document).ready(function(){
  var wins;
  var losses;
  var targetScore;
  var currentScore;
  var imageNum = [];
  var totalScore;
  

// functions for the start game button
  $("#buttonStart").click(function(){
    imageNum = [];
    // generating the numbers for the cat images
    for (i=0; i < 4; i++){
      var ranNum = Math.floor(Math.random()*12);
      imageNum.push(ranNum);

    }

    wins = 0;
    losses = 0;
    currentScore = 0;
    totalScore = 0;
    targetScore = Math.floor(Math.random()*101+19)
    console.log(imageNum)
    console.log(`the target score generated ${targetScore}`)
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#totalScore").text(totalScore);
    $("#currentScore").text(currentScore);
    $("#targetScore").text(targetScore);
    // clearing the original start game button
    $("#startGameArea").empty();
    var $newRoundBtn = $("<button>");
    // creating the new round button
    $newRoundBtn.addClass("btn btn-primary");
    $newRoundBtn.attr("id", "newRoundBtn");
    $newRoundBtn.text("NewRound");
    $("#startGameArea").append($newRoundBtn);

    // creating reset game button
    var $resetBtn = $("<button>")
    $resetBtn.addClass("btn btn-primary");
    $resetBtn.attr("id", "resetBtn");
    $resetBtn.text("Reset Game");
    $("#startGameArea").append($resetBtn);

    $("#image0").attr("data-num", imageNum[0]);
    $("#image1").attr("data-num", imageNum[1]);
    $("#image2").attr("data-num", imageNum[2]);
    $("#image3").attr("data-num", imageNum[3]);

    var catNum = parseInt;
    console.log(`this is catNum ${catNum}`)
  })

// game play

  $("#image0").click(function(){
    currentScore = currentScore + catA;
    $("#currentScore").text(currentScore);
  });
})