// $(document).ready(function(){
  // variables needed: losses, wins, accumulated score, score, target number
  // arrays: random scores for the image choices

  var targetNumber;
  var losses;
  var wins;
  var accumulatedScore;

  var imageScores = [];

  // Start game button
  $("#buttonStart").click(function(){
    // generates the random numbers for the cats
    for (i=0; i < 4; i++){
      var ranNum = Math.floor(Math.random()*12)
      imageScores.push(ranNum);
      console.log(ranNum);
    }
  });

    console.log(imageScores)
    // generates a random goal number to reach
    // reset total score to 0
    // reset wins/losses to 0
    // this button gets placed by the new round button and generates the reset button
 

//  cat images 
  $(".catChoice").click(function(){
    // need a random number generated
    // need an on-click function that adds their invisible score to the total game score
  });





// new round button


  // generates random number for cats (1-12)
  // generates goal number (19-120)

// win conditions
  // player wins when the score matches the goal number

// loss conditions
  // player loses if the score goes over the goal number

// });