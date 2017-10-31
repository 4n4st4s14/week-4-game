$(document).ready(function() {
//make the game an object
var game = {

  goalNum: 0,
  counter: 0,
  wins: 0,
  losses: 0,

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
     $(".btn").each(function(i, obj){
       $(this).attr("data-gemvalue", gemNums[i]);

       console.log(parseInt($(this).data("gemvalue")));

      });
    }
  },
