//First Create container that stores whatever name the user enters
var name = prompt("Please enter your name.");
//Second Capitalize the first letter of their name

// to do this you must isolate the first letter of whatever the user entered via slicing the variable
var firstChar = name.slice(0, 1);

// turn the first character or letter into upper case via js commands
var upperCaseFirstChar = firstChar.toUpperCase();

// isolate the rest of the name into a separate variable
var restOfName = name.slice(1, name.length);

// turn rest of name lower case to prevent spongebob text-style
var lowerCaseRestOfName = restOfName.toLowerCase();

// Concatenate variables to create an alert, that also automatically capitalizes the first letter of their name
var myName = "Nekko"
alert("Hello " + upperCaseFirstChar + lowerCaseRestOfName + "! " + 'My name is ' + myName + ".");