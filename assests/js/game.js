
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

var alphabet = generateAlphabet();
var computerChoice = randomComputerChoice(alphabet);

console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guesses + " Computer picked: " + computerChoice);

document.onkeypress = function(event) {
  var userGuess = event.key;
  setValue("#note", "");
  console.log(computerChoice);

  // if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)){
  if(/[a-zA-Z]/.test(String.fromCharCode(event.keyCode))){

    if (userGuess != computerChoice){
      guesses.push(userGuess);
      guessesLeft --;

      setValue("#your-guesses",guesses);
      setValue("#guesses-left",guessesLeft);

      if(guessesLeft == 0){
        losses ++;
        setValue("#losses",losses);

        // reset values
        guessesLeft = 9;
        guesses = [];
        setValue("#guesses-left",guessesLeft);
        setValue("#your-guesses","");
        computerChoice = randomComputerChoice(alphabet)
      } 
    }
    if(userGuess == computerChoice){
      wins ++;
      setValue("#wins", wins);
      console.log("you won");
      computerChoice = randomComputerChoice(alphabet)
      console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guesses + " Computer picked: " + computerChoice);
    }
  }else{
    console.log('Try again, invalid character: ' + userGuess);
    setValue("#note", "Try again. Invalid character "+ userGuess);
  }
  if((wins == 9) || (losses == 9) || (wins+losses == 9) ){
    setValue("#note", "Game OVER! Reload the page to play again");
  }
}

function setValue(nameID, value) {
  var domElement = document.querySelector(nameID)
  domElement.innerText = value;
}

function generateAlphabet(){
  var alphabet = []
  for(var i=65; i <= 90; i++){
    alphabet.push(String.fromCharCode(i))
  }
  for(var i = 97; i <= 122; i++){
    alphabet.push(String.fromCharCode(i))
  }
  return alphabet;
}

function randomComputerChoice(alphabet){
  var choice = alphabet[Math.floor(Math.random() * alphabet.length)];
  return choice;
}