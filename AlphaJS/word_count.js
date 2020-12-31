var tweet = prompt('Compose your tweet');
var tweetCount = tweet.length;
var tweetUnder140 = tweet.slice(0, 140)

//This doesnt cut off yet but i will figure out how to make it
if (tweetCount > 140) {
    alert("Your tweet: " + tweetUnder140);
} else {
    alert('You have written ' + tweetCount + ' characters, you have ' + (140 - tweetCount) + ' characters left.');

}