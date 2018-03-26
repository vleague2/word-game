var birthday = ["b", "i", "r", "t", "h", "d", "a", "y"];

document.onkeydown = function () {myFunction(event)};

function myFunction(event) {
    var key1 = event.key;

    if (birthday.indexOf(key1) === -1) {
        document.getElementById("incorrect-letter").innerHTML = key1;
    }

    else {
        document.getElementById("space1").innerHTML = key1;
    }
}