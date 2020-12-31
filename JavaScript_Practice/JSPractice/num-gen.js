//     Number is between 0 and 5 and is rounded and then alerted out
// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// alert(n)

var loveOne = prompt("What is your name");
var lovetwo = prompt("What is their name");
var loveScore = Math.random();
loveScore = loveScore * 10; //LoveScore by itself equals "1"
loveScore = Math.floor(loveScore) + 1; //This rounds and + 1just ensures that the base number isnt zero


alert(loveOne + " and " + lovetwo + " have a love score of " + loveScore + " out of 10");