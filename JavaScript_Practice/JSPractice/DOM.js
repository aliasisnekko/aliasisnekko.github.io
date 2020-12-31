function changePara() {
    document.getElementById("para1").innerHTML = "This has been changed by javascript";
}
changePara();

function changeText() {
    var inputText = document.getElementById("userInput").value; //Stores whatever is put in input box as a variable
    document.getElementById("para2").innerHTML = inputText; //This changes the innerHTML/Text(paragraph) to whatever that variable is
}

function colorChange(color) {

    document.body.style.background = color;
} //decided to split the color changing functions to see if my perspective changes


var homeColor = ' #583d72'; //saved as a Global Variable

function changeToBlue() {
    blue = '#111d5e'
    if (document.body.style.background != blue) {
        document.body.style.background = blue;
    }

}

function changeToYellow() {
    document.body.style.background = '#ffd66b';
}

function changeToRed() {
    document.body.style.background = '#f05454';
}


function changeAll() {
    document.body.style.background = '#dddddd';
    document.getElementById('para1').style.color = '#222831'; //!!!IMPORTANT!!!

}

//when using the plural method an array is echo'd to the console / aka all the selected elements get turned into an array
document.getElementsByTagName('p')[1].style.color = "red"; //NOTE that plural elements fetches all tags
//even for just one item the classes are still placed in an array
document.getElementsByClassName('btn')[1].style.color = "white"

//better than above method still used to select elements from document
//this can be used to select whatever you'd like as long as you call it from the html properly ie "." "#" and plain text for tags
document.querySelector('.btn-danger');
document.querySelector("div button").style.color = 'black'; //if you try to call multiple tags only the first is affected

//if multiple items can be selected then the above method wont work, this acts the same as plural selectors making arrays out of the data
document.querySelectorAll('div button')[2].style.color = 'white';