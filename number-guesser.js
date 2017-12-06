var randomNumber = Math.floor(Math.random()*100)+1;
var inputNum = document.getElementById('inputNum');
var guessButton = document.getElementById('guessButton');
var clearButton = document.getElementById('clearButton');
var parse = parseInt(inputNum.value);



guessButton.addEventListener('click', displayGuess);

//take guess input and display it
function displayGuess() {
  event.preventDefault();
  guessedNumber.innerText = parseInt(inputNum.value);
  parse = parseInt(inputNum.value);
  console.log(parse);
}

// compare userguess to randomNumber
var tooHighOrLow = document.getElementById('tooHighOrLow');
guessButton.addEventListener('click', compareNumbers);

function compareNumbers() {
  console.log(randomNumber);
  var nonNaN = isNaN(parseInt(inputNum.value));
  if ( nonNaN === true) {
    tooHighOrLow.innerText = 'Error: That\'s not a number. Please pick a number from 1 and 100.';
  } else if (parse === randomNumber) {
    tooHighOrLow.innerText = 'BOOM!';
  } else if (parse < randomNumber) {
    tooHighOrLow.innerText = 'That\'s too low';  
  } else if (parse > randomNumber) {
    tooHighOrLow.innerText = 'That\'s too high'; 
    console.log('woooo');
  }
}
compareNumbers();



//clear button should be disabled if there is nothing to clear-- look up on MDN- HTML, to enable... put in JS

//reset button should be disabled if there is nothing to reset-- look up on MDN





 //create function to generate a random number
 //create a function to get it closer to that random number   
// is right number

