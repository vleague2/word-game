var birthday = ["b", "i", "r", "t", "h", "d", "a", "y"];

var guessCounter = 7;

document.onkeypress = function () {myFunction(event)};

function loadFunction() {
    var blanks = document.getElementById("space1");
    blanks.textContent = "_   _   _   _   _   _   _   _";
    var text = blanks.textContent;
}

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