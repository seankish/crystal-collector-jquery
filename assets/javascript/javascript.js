$(document).ready(function(){
var wins = 0
var losses = 0
var targetScore;
var pinkValue; 
var blueValue;

var greenValue;
var yellowValue;
var playerScore =
reset();
// randomize crystal and targetscore after each win/loss
function reset() {
     playerScore = 0;
     pinkValue = Math.floor(Math.random() * 11)+1;
     blueValue = Math.floor(Math.random() * 11)+1;
     greenValue = Math.floor(Math.random() * 11)+1;
     yellowValue = Math.floor(Math.random() * 11)+1;
     targetScore = Math.floor(Math.random() * 101)+19;
    console.log (targetScore);
    console.log(yellowValue)
}

$("#pink").on("click", function() {
     playerScore= this.playerScore + pinkValue;
     console.log(playerScore)
  

})















})