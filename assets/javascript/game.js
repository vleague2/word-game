// CREATING GLOBAL VARIABLES!!

    // Create variable to count user wins
    var winCounter = 0;

        //function to display the win count
        function displayWin() {
            var winDisplay = document.getElementById("winCt");
            winDisplay.textContent = winCounter;
        }

    // Create variable to count user losses
    var lossCounter = 0;

        // function to display the loss count
        function displayLoss() {
            var lossDisplay = document.getElementById("loseCt");
            lossDisplay.textContent = lossCounter;
        }   

    // Create variable to count how many guesses the user has left
    var guessCounter = 8;

        // function to display the guess counter
        function displayGuess() {
            var guessDisplay = document.getElementById("guesses");
            guessDisplay.textContent = guessCounter;
        }    

    // Create array of words that the user will need to guess
    var words = ["birthday", "celebrate", "meowing", "eating", "shorthair", "adorable", "scratching"];

    // Choose a random word from the word array using math floor
    function chooseWord() {
        return words[Math.floor (Math.random() * words.length)];
    }

    // Assign the result of the random chosen word to a variable
    var randomWord = chooseWord();

    // Create answer array with a for loop that adds an underscore for each letter of the random word
    var answerArray = [];
    for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
    }

    // Display answer array.
    function displayAnswer() {
        var answerDisplay = document.getElementById("hangman-word");
        answerDisplay.textContent = answerArray;   
    }
    
    // Create an array for the incorrect guesses to be added to
    var incorrectArray = []; 

    // Create letters remaining variable based on the length of the answer array
    var remainingLetters = randomWord.length;

// FUNCTIONS to update display & wins and losses

    function updateDisplays() {
        displayWin();
        displayLoss();
        displayGuess();
        displayAnswer();
    }

    function updateWins() {
        // Increment the win counter
        winCounter++;

        // Reset the guess counter
        guessCounter = 8;

        // Redefine the randomWord so that it generates a new one
        randomWord = chooseWord();

        // Redefine answer array
        answerArray = [];
        for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
        };

        // Redefine incorrect guesses array
        incorrectArray = [];

        // Redefine the number of remaining letters
        remainingLetters = randomWord.length;

        // Redefine snowman array to select all in the class and assign to a variable so we can change their display
        var snowmanArray = Array.from(document.querySelectorAll(".overlay"));

        // ForEach function to overwrite the display to none (aka make images disappear)
        snowmanArray.forEach(function (snowman) {
           snowman.style.display = "none";
        });

        // Update all displays with new info
        updateDisplays();
    }

    function updateLosses() {
        // Increment loss counter
        lossCounter++;

        // Reset guess counter
        guessCounter = 8;

        // Redefine randomWord so it chooses a new one
        randomWord = chooseWord();

        // Redefine answer array
        answerArray = [];
        for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
        };

        // Redefine incorrect guesses array
        incorrectArray = [];

        // Redefine the number of remaining letters
        remainingLetters = randomWord.length;
        
        // Redefine snowman array to select all in the class and assign to a variable so we can change their display
        var snowmanArray = Array.from(document.querySelectorAll(".overlay"));

        // For each function to overwrite the display to none
        snowmanArray.forEach(function (snowman) {
           snowman.style.display = "none";
        });

        // Update all displays with new info
        updateDisplays();
    }

   

// THE GAME ITSELF!

// Start by showing counter displays
updateDisplays();

// Player presses a letter, which initiates a function
document.onkeyup = function(event) { 

    // The code below runs if there are more than 0 guesses left, and more than 0 remaining letters in the word 
    if ((guessCounter > 0) && (remainingLetters > 0)){

        // Create a loop that runs through the letters in the random word
        for (var j = 0; j < randomWord.length; j++) {

            // Check if the guess matches the letters in the word by utilizing the j loop. If they do match....
            if (randomWord[j] === event.key) {

                // Add the letter to the answer array
                answerArray[j] = event.key;

                // Update the answer array for the viewer to see
                displayAnswer();

                // Reduce letters remaining variable by the number of letters added to the answer array. 
                remainingLetters--;
            }

            // If the letter is not one of the letters in the random word:
            else {
                
                // Check if the letter is already in the incorrectArray because if not it will add it like 8 times, and if the letter is not in the randomWord because otherwise it adds correct guesses too
                if ((incorrectArray.indexOf(event.key) < 0) && (randomWord.indexOf(event.key) < 0)) {

                    // Add the letter to the incorrect guesses array
                    incorrectArray.push(event.key);

                    // Reduce guesses remaining by one
                    guessCounter--;

                    // Display new guessCounter
                    displayGuess();

                    // Making snowman image array variable and pulling array items from all DOM items classified as overlay (Darren helped me with this part fyi)
                    var snowmanArray = Array.from(document.querySelectorAll(".overlay"))

                    // define a function: for each item in the snowman array, aka each image I'm pulling, display the image with the ID number that matches the number of guesses remaining
                    snowmanArray.forEach(function (snowman){
                        var snowmanID = snowman.id; 
                        drawSnowman(snowman, snowmanID);
                    });

                    // Call the function that will display the images based on ID number (display happens by changing their display style from none to block)
                    function drawSnowman(snowman, snowmanID) {
                        if (snowmanID == guessCounter) {
                          document.getElementById(snowmanID).style.display = "block";  
                        }
                    }    
                    // Hook up incorrect gueses to DOM 
                    var incorrectDisplay = document.getElementById("incorrect-letter");

                    // and then display the new letter to the user by adding it to the incorrect array 
                    incorrectDisplay.textContent = incorrectArray;
                }              
            }        
        }           
    }

    // If the guesses left is less than one, run the function to update the losses
    else if (guessCounter < 1) {
        updateLosses();
    }

    // If the letters remaining in the randomWord are less than one, run the function to update the wins
    else if (remainingLetters < 1) {
        updateWins();
    }
}   