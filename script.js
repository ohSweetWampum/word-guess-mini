// Global variables
var words = ["JavaScript","html","cascading style sheets","github","command line","Code","computer","element",];

var randomlyChooseIndexNumber = words[Math.floor(Math.random()* words.length)];
var takeCorrespondingElementFromArray = [randomlyChooseIndexNumber];
var wins = 0;
var loses = 0;

//timer starts when user presses "start" button




 var countdownClock = document.getElementById("countdownClock");
 var secondsLeft = 40;
 
 function timeLeftClock(){
     var timerInterval = setInterval(function(){
         secondsLeft--;
         countdownClock.textContent = secondsLeft + " seconds left!";
         if(secondsLeft === 0){
             clearInterval(timerInterval);
    
         }
     }, 1000);
 }
 
     // Add your code here for when the game is over
 
 
 document.getElementById("start-timer-now-button").addEventListener("click", function(){
     timeLeftClock();
 });