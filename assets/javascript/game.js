$(document).ready(function() {
//variables


//generate random goal number
function genRandGoalNum() {
        randGoalNum = Math.floor(Math.random()*121);
//if it's less than 20, run the function again
       if (randGoalNum < 20) {
         genRandGoalNum();
//else return the number value
       } else {
         return randGoalNum;
       };
};
genRandGoalNum();

//generate random gem values between 1 and 12

function genRandGemNumber() {
  var randGemNum = Math.floor(Math.random()*13);
  //console.log(randGemNum);
  if (randGemNum > 13 || 0) {
    genRandGemNumber();
  } else {
    return randGemNum;
  };

};
//genRandGemNumber();

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

function calculation(value) {
      console.log(value);
      console.log(randGoalNum);

     userScore = userScore + parseInt(value);

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

calculation();




});
