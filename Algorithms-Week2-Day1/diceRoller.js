//Using what we've learned about the Math library in JavaScript, 
//complete the following function that should return a value between 1 through 6 at random.

function d6() {
    var diceRoller = Math.floor(Math.random()*6 + 1);
    return diceRoller;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
