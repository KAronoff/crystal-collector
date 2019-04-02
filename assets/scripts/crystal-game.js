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
  var gamePlay = false

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
    gamePlay = true;
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
    $newRoundBtn.addClass("btn btn-outline-primary");
    $newRoundBtn.attr("id", "newRoundBtn");
    $newRoundBtn.text("NewRound");
    $("#startGameArea").append($newRoundBtn);

    // creating reset game button
    var $resetBtn = $("<button>")
    $resetBtn.addClass("btn btn-outline-primary");
    $resetBtn.attr("id", "resetBtn");
    $resetBtn.text("Reset Game");
    $("#startGameArea").append($resetBtn);



    $image0.attr("data-num", imageNum[0]);
    $image1.attr("data-num", imageNum[1]);
    $image2.attr("data-num", imageNum[2]);
    $image3.attr("data-num", imageNum[3]);

  })
// reset the game by pushing the reset button
  $(document).on("click", "#resetBtn", function(){
    
    wins = 0;
    losses = 0;
    currentScore = 0;
    totalScore = 0;
    targetScore = Math.floor(Math.random()*101+19)
    gamePlay = true;
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
// creating new round btn
  $(document).on("click", "#newRoundBtn", function(){
    currentScore = 0;
    targetScore = Math.floor(Math.random()*101+19)
    gamePlay = true;
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

    if (gamePlay === false) {
      return false;
    }
    var cat0 = parseInt($(this).attr("data-num"));
    console.log(`this is cat0 ${cat0}`);

    currentScore = cat0 + currentScore;
    $("#currentScore").text(currentScore);
    
    // retrieve src of cat photo
    var catPhoto = $(this).attr("src");
    // write catPhoto in as "src" attribute for cat-image
    $("#cat-image").attr("src", catPhoto);

    if (currentScore === targetScore){
      alert("You win!")
      totalScore = totalScore + currentScore;
      wins = wins + 1;
      $("#currentScore").text(currentScore);
      $("#wins").text(wins);
      gamePlay = false;
    }
    else if (currentScore > targetScore){
      alert("You lose :(");
      losses = losses + 1;
      $("#losses").text(losses);
      gamePlay = false;
      
    }
  });

  $image1.click(function(){

    if (gamePlay === false) {
      return false;
    }

    // retrieve src of cat photo
    var catPhoto = $(this).attr("src");
    // write catPhoto in as "src" attribute for cat-image
    $("#cat-image").attr("src", catPhoto);

    var cat1 = parseInt($(this).attr("data-num"));
    console.log(`this is cat1 ${cat1}`);

    currentScore = cat1 + currentScore;
    $("#currentScore").text(currentScore);

    // win conditions

    if (currentScore === targetScore){
      alert("You win!")
      totalScore = totalScore + currentScore;
      wins = wins + 1;
      $("#currentScore").text(currentScore);
      $("#wins").text(wins);
      gamePlay = false;
    }
    else if (currentScore > targetScore){
      alert("You lose :(");
      losses = losses + 1;
      $("#losses").text(losses);
      gamePlay = false;
      
    }
  });

  $image2.click(function(){

    if (gamePlay === false) {
      return false;
    }

    // retrieve src of cat photo
    var catPhoto = $(this).attr("src");
    // write catPhoto in as "src" attribute for cat-image
    $("#cat-image").attr("src", catPhoto);

    var cat2 = parseInt($(this).attr("data-num"));
    console.log(`this is cat2 ${cat2}`);

    currentScore = cat2 + currentScore;
    $("#currentScore").text(currentScore);

    
    // win conditions

    if (currentScore === targetScore){
      alert("You win!")
      totalScore = totalScore + currentScore;
      wins = wins + 1;
      $("#currentScore").text(currentScore);
      $("#wins").text(wins);
      gamePlay = false;
    }
    else if (currentScore > targetScore){
      alert("You lose :(");
      losses = losses + 1;
      $("#losses").text(losses);
      gamePlay = false;
      
    }
  });

  $image3.click(function(){

    if (gamePlay === false) {
      return false;
    }

    // retrieve src of cat photo
    var catPhoto = $(this).attr("src");
    // write catPhoto in as "src" attribute for cat-image
    $("#cat-image").attr("src", catPhoto);
    
    var cat3 = parseInt($(this).attr("data-num"));
    console.log(`this is cat3 ${cat3}`);

    currentScore = cat3 + currentScore;
    $("#currentScore").text(currentScore);

    // win conditions

  if (currentScore === targetScore){
    alert("You win!")
    totalScore = totalScore + currentScore;
    wins = wins + 1;
    $("#currentScore").text(currentScore);
    $("#wins").text(wins);
    gamePlay = false;
  }
  else if (currentScore > targetScore){
    alert("You lose :(");
    losses = losses + 1;
    $("#losses").text(losses);
    gamePlay = false;
    
  }
  });
})