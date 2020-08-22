let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget= () =>
{ return Math.floor( Math.random()*10 );}

//function to compare guesses and determine winner
const compareGuesses = (human, computer, target) => { 
  const humanG = Maths.abs(human - target);
  const computerG = Maths.abs(computer - target);
  if (humanG <= computerG) {
    return true;}
 else {
   return false;
  } 
  } 

//function to updatescore after each round
const updateScore = winner => {
    if (winner === 'human') {humanScore += 1;} 
    else if (winner === 'computer') { computerScore += 1;}
}

//funtion to update round number
const advanceRound = () => currentRoundNumber += 1;


