
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

 
  // Button click

$(".btn").click(function () {

var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswers(userClickedPattern.length - 1)
});

var level= 0;
var started = false;
$(document).keydown(function (){
    if (! started){
     $("#level-title").text("Level " +level);
    
    nextSequence();
 started = true;}
});

// CHECK ANSWER

function checkAnswers(currentLevel) {
if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {  
  if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function (){
      nextSequence();
      }  , 1000) }
    
    }
 else { $("body").addClass("game-over"); 
 setTimeout(function () { $("body").removeClass("game-over");}, 200);
 playSound("wrong");
 $("h1").text("Game Over Press any Key To Restart" )
 startOver();
}
 
}

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
audio.play();}

function animatePress(currentColor){

  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

function nextSequence(){
  userClickedPattern = [];
   level++;
   
   $("#level-title").text("Level " + level);
    var randomNumber = Math.floor( Math.random()*4) ;
    var randomChosenColour = buttonColors[randomNumber]
  gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}

function startOver() {

  level = 0;
  gamePattern = [];
 started = false;

}