var guess=0;
var color=["red", "yellow" , "orange","brown", "darkviolet","greenyellow"];
var finished = false;
var guessInput;
var randNum;
var lowerInput;
 function do_game() {
   randNum =Math.round(Math.random()* color.length);
   
    while (!finished) {
		color.sort();
    guessInput=prompt("I'm thinking of one of below colors , can you guess which one is it? \n\n"+ color);
	lowerInput=guessInput.toLowerCase();
	//Answer is:
   // alert ("picked color " + color[randNum]);
    guess += 1;
    finished = check_guess()
}
}
function  changeColor(){
  document.getElementById("contentChange").style.color=lowerInput ;
}
function check_guess () {
  if (color.indexOf(lowerInput)<0){
    alert("Sorry , I don't recognize your color!");
    return false;
  }
  if (lowerInput > color[randNum]) {
    alert("Sorry,your guess is wrong!\n\n Hint:your color is alphabetically higher than mine.\n\n Please try again.");
    return false;
  }
  if (lowerInput < color[randNum]) {
    alert("Sorry,your guess is wrong!\n\n Hint:your color is alphabetically lower than mine.\n\n Please try again!");
    return false;
  }
    alert("Congratulation , your guess is correct. It took you \n"+guess+ " guess and finish the game.\n\n Now click on Color button to see the result!");
    return true;
}
;