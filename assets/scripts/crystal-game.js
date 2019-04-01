$(document).ready(function(){
  var wins;
  var losses;
  var targetScore;
  var currentScore;
  var imageNum = [];
  var totalScore;
  
  var $image0 = $("#image0");
  var $image1 = $("#image1");
  var $image2 = $("#image2");
  var $image3 = $("#image3");

// functions for the start game button
  $("#buttonStart").click(function(){
    imageNum = [];
    // generating the numbers for the cat images
    for (i=0; i < 4; i++){
      var ranNum = Math.floor(Math.random()*11+1);
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



    $image0.attr("data-num", imageNum[0]);
    $image1.attr("data-num", imageNum[1]);
    $image2.attr("data-num", imageNum[2]);
    $image3.attr("data-num", imageNum[3]);

  })
// reset the game by pushing the reset button
  $("#resetBtn").click(function(){
    
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

    imageNum = [];
    // generating the numbers for the cat images
    for (i=0; i < 4; i++){
      var ranNum = Math.floor(Math.random()*11+1);
      imageNum.push(ranNum);
    }

  });
// game play
// cat images add to to the current score
  $image0.click(function(){
    var cat0 = parseInt($(this).attr("data-num"));
    console.log(`this is cat0 ${cat0}`);

    currentScore = cat0 + currentScore;
    $("#currentScore").text(currentScore);
  });

  $image1.click(function(){
    var cat1 = parseInt($(this).attr("data-num"));
    console.log(`this is cat1 ${cat1}`);

    currentScore = cat1 + currentScore;
    $("#currentScore").text(currentScore);
  });

  $image2.click(function(){
    var cat2 = parseInt($(this).attr("data-num"));
    console.log(`this is cat2 ${cat2}`);

    currentScore = cat2 + currentScore;
    $("#currentScore").text(currentScore);
  });

  $image3.click(function(){
    var cat3 = parseInt($(this).attr("data-num"));
    console.log(`this is cat3 ${cat3}`);

    currentScore = cat3 + currentScore;
    $("#currentScore").text(currentScore);
  });

  

})