$(document).ready(function() {
//make the game an object
var game = {
// variables
  goalNum: 0,
  counter: 0,
  wins: 0,
  losses: 0,
//game
  newGame: function() {
     //generate random goalNum
    goalNum = parseInt(Math.floor(Math.random()*120)) + 19;
    console.log(goalNum);
    counter = 0;

   // set losses, wins, and goalnum in html
   $('#wins').html(game.wins);
   $('#losses').html(game.losses);
   $('#goalNum').html(goalNum);

   console.log(counter);

   //array for the gem values
   gemNums = [];
   //loop to assign random values to the gems
   for (var gemNums = [], i = 0; i < 4; i++) {
     var num = parseInt(Math.floor(Math.random()*12)+1);

     gemNums.push(num);

     console.log(gemNums);
   //assign each button an attribute that stores data- gemvalue, with the value //being  the number generated in gemNums at the same index
     $(".btnz").each(function(i, obj){
       $(this).attr("data-gemvalue", gemNums[i]);

       console.log(parseInt($(this).data("gemvalue")));

      });
    }
  },
//end of newGame

//adding the Scores
scores: function(){

  $('.btnz').on('click', function(event){
    //add the gem value to the counter value
    counter = parseInt(counter) + parseInt($(this).data("gemvalue"));

    console.log(counter);
    console.log(parseInt($(this).data("gemvalue")));

    $('#yourTotal').html(counter);
    //win/Lose
    if (parseInt(counter)=== goalNum) {
      parseInt(game.wins++);
      $('#wins').html(game.wins);
      $(this).removeData("gemvalue");

      setTimeout(game.newGame, 2000);// timeouts for functions
      setTimeout(game.scores, 2000);
    } else if (parseInt(counter) > goalNum) {
      parseInt(game.losses++);
      $('#losses').html(game.losses);
      console.log(losses);
      $(this).removeData("gemvalue");

      setTimeout(game.newGame, 2000);// timeouts for functions
      setTimeout(game.scores, 2000);
    }

  });
}

}

game.newGame();
game.scores();


});

//First Attempt
/*
//generate random goal number
function genRandGoalNum() {
        randGoalNum = Math.floor(Math.random()*121)+1;
//if it's less than 20, run the function again
       if (randGoalNum < 20 ) {
         genRandGoalNum();
//else return the number value
       } else {
         return randGoalNum;
       };
};
genRandGoalNum();


//genRandGemNumber();

//generate random gem values between 1 and 12

function genRandGemNumber() {
  var randGemNum = Math.floor(Math.random()*13) +1;
  //console.log(randGemNum);
  if (randGemNum > 13 ) {
    genRandGemNumber();
  } else {
    return randGemNum;
  };

};


var buttons = $('.btn');
//function to create button values using .each on the buttons var
buttons.each(function(i,button) {
   var gemVal = genRandGemNumber();
  console.log(gemVal);
  $(this).data('value', gemVal);

});

//sets goal number in html
var goalNum;
var userScore= 0;
$('#goalNum').text(randGoalNum);

//onclick for the gems

$('.btn').on('click', function(event){
     console.log("I've been clicked");
     //assign the gem a score
      var buttonData = $(this).data('value');
     console.log(buttonData);
    calculation(buttonData);
});



/*function calculation(value) {
      console.log(value);
      console.log(randGoalNum);

     userScore = userScore + value;

     console.log(userScore);
     //winner

  if (userScore == goalNum){
    alert("you win");
    userScore= 0;
    genRandGoalNum();
    $('#goalNum').text(goalNum);
  } else if  (userScore > goalNum) {
      alert("you lose");
      userScore= 0;
      genRandGoalNum();
      $('#goalNum').text(goalNum);
    }

}

calculation(); */
