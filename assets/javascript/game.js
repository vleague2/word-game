// CREATING GLOBAL VARIABLES!!

// Create variable to count user wins
var winCounter = 0;

// Hook up win counter to DOM, so create a variable that will display on the webpage
var winDisplay = document.getElementById("winCt");

winDisplay.textContent = winCounter;

// Create variable to count user losses
var lossCounter = 0;

// Hook up loss counter to DOM, so create a variable that will display on the webpage
var lossDisplay = document.getElementById("loseCt");

lossDisplay.textContent = lossCounter;

// Create variable to count how many guesses the user has left
var guessCounter = 8;

// Hook up guess counter to DOM, so create a variable that will display on the webpage
var guessDisplay = document.getElementById("guesses");

guessDisplay.textContent = guessCounter;

// Create array of words that the user will need to guess
var words = ["birthday", "celebrate", "meowing", "eating", "shorthair"];

// Choose a random word from the word array using math floor
var randomWord = words[Math.floor (Math.random() * words.length)];

// Create answer array with a for loop that adds an underscore for each letter of the random word
var answerArray = [];
for (var i = 0; i < randomWord.length; i++) {
answerArray[i] = "_";
}

// Hook up answer array to DOM
var answerDisplay = document.getElementById("hangman-word");

answerDisplay.textContent = answerArray;

// Create an array for the incorrect guesses to be added to
var incorrectArray = []; 

// Create letters remaining variable based on the length(? or the number of different characters?) of the answer array
var remainingLetters = randomWord.length;

// Set the current snowman image as a variable
var snowmanImage = document.getElementById("hangman-img");

// Snowman array
var snowmanArray = ["../images/snowman_snowflake.png", "../images/snowman_body1.png", "../images/snowman_body2.png", "../images/snowman_body3.png", "../images/snowman_eyes.png", "../images/snowman_mouth.png", "../images/snowman_final.png"];


//make letter generation a function & call it when wins and losses are ++

// THE GAME ITSELF!

// Player presses a letter, which initiates a function
    document.onkeyup = function(event) { 

        // Create a while loop based on remaining guesses (> 0) so that the player can enter input while there are still letters to be guessed
        if ((guessCounter > 0) && (remainingLetters > 0)) {

            // Create a loop that runs through the letters in the random word
            for (var j = 0; j < randomWord.length; j++) {

                // Check if the guess matches the letters in the word by utilizing the j loop. If they do match....
                if (randomWord[j] === event.key) {

                    // Add the letter to the answer array
                    answerArray[j] = event.key;

                    // Update the answer array for the viewer to see
                    answerDisplay.textContent = answerArray;

                    // Reduce letters remaining variable by the number of letters added to the answer array
                    remainingLetters--;
                }

                // If the letter is not one of the letters in the random word:
                else {
                    
                    // Create a variable for the wrong keyup
                    var wrongGuess = event.key;

                    if ((incorrectArray.indexOf(wrongGuess) < 0) && (answerArray.indexOf(wrongGuess) < 0)) {
                        // Add the letter to the incorrect guesses array
                        incorrectArray.push(wrongGuess);

                        // Reduce guesses remaining by one
                        guessCounter--;

                        // Display new guessCounter
                        guessDisplay.textContent = guessCounter;

                        // Hook up incorrect gueses to DOM 
                        var incorrectDisplay = document.getElementById("incorrect-letter");

                        // and then display
                        incorrectDisplay.textContent = incorrectArray;
                    } 
           

                    

                    
 
                     
 
                     
 
                     // Trigger next iteration of snowman image                  

                }     
            }           
        }
        else if (guessCounter < 1) {
                lossCounter++;
                lossDisplay.textContent = lossCounter;
                guessCounter = 0;
                guessDisplay.textContent = guessCounter;
            }

        else if (remainingLetters < 1) {
            winCounter++;
            winDisplay.textContent = winCounter;
            guessCounter = 0;
            guessDisplay.textContent = guessCounter;
        }
    }

        // When guesses remaining is < 1

            // Lose counter goes up by one

            // Snowman image resets

            // Guesses remaining counter resets

            // Incorrect guesses field resets

            // New randomly generated word. so this has to end the loop somehow basically

        // When letters remaining < 1

            // Win counter goes up by one

            // Loop ends also, so snowman image resets, guesses remaining counter resets, incorrect guesses field resets, new randomly generated word

    
