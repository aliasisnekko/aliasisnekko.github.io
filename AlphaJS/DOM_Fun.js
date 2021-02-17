document.querySelector('#heading').innerHTML = 'This Page Is Styled Using JavaScript';
document.getElementById('para2').style.color = '#222831';
document.getElementsByTagName('p')[0, 1].style.fontWeight = 'bold';
document.querySelector('div button').style.color = 'black'; //this only selects the first child in the div 
document.querySelectorAll('.btn')[3].style.color = 'white'; //since there are multiple buttons im using select all
document.getElementsByClassName('btn')[4].style.backgroundColor = '#a7c5eb'
    //array must be called to select plurals even when by itself
    //above is used to style page and as a tooltip to memorize

var doc = document.body;


function reset() {
    doc.style.backgroundColor = "#7c1dd4";
    document.querySelector('h1').innerHTML = "This Page Is Styled Using JavaScript";
    document.querySelector('#para2').innerHTML = "The page has been refreshed";
}

function changeText() {
    var inputText = document.getElementById('userInput').value;
    document.getElementById("para2").innerHTML = inputText;
}

function changeToBlue() {
    blue = '#008891'
    doc.style.backgroundColor = blue;
}

function changeToYellow() {
    yellow = '#c0e218'
    doc.style.backgroundColor = yellow;
}

function changeToRed() {
    red = '#a9294f'
    doc.style.backgroundColor = red;
}

function changeAll() {
    doc.style.backgroundColor = '#a7c5eb';
    document.querySelector('h1').innerHTML = "Hello World!";
    document.getElementsByClassName("btn").classList.add("btn-dark");
    document.getElementsByTagName("p").classList.add("text-dark");
    document.getElementsByTagName("h1").classList.add("text-dark");
    document.getElementById("sorry").innerHTML = "Things are now annoyingly grey, sorry!";
    document.getElementById("white").classList.add("btn-light");
}
