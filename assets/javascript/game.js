var birthday = ["b", "i", "r", "t", "h", "d", "a", "y"];

var guessCounter = 7;

document.onkeydown = function () {myFunction(event)};

function myFunction(event) {
    var key1 = event.key;

    if (birthday.indexOf(key1) === -1) {
        document.getElementById("incorrect-letter").innerHTML = key1;
        document.querySelector("#guesses").innerHTML = guessCounter--;
    }

    else {
        document.getElementById("space1").innerHTML = key1;
    }
}