var loveOne = prompt("What is your name");
var lovetwo = prompt("What is their name");
var loveScore = Math.random();
loveScore = loveScore * 10;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 7) {
    alert("Wow! A match of " + loveScore + " out of 10\n" + loveOne + " and " + lovetwo + " really belong together!")
} else {
    alert(loveOne + " and " + lovetwo + " have a love score of " + loveScore + " out of 10");

}

//example
if (track === 'clear') {
    goStraight();
} else { turnRight(); }