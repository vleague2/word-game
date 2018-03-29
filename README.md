# Hangman Word Game
This repo contains a Pusheen-themed hangman game coded with Javascript. It was created as part of UCF's Coding Bootcamp program.

How to play:
1. Load the page and type any letter to begin.
2. The goal is to correctly guess all of the letters of a secret word that the game chooses. 

What the game does:
1. Generates a random word from a list of predefined words
2. Listens for user key input as they guess the letters of the word
3. Compares key input to the letters in the randomly generated word, and updates the display of the word if the guess is correct
4. If the guess is not correct, it adds the guesses to an incorrect guess array that displays to the user so they know what they've already guessed
5. Tracks how many guess attempts the user has left before they lose the game
6. Displays a "hangman" image as incorrect guesses are made, but with a Pusheen theme!
7. Counts wins and losses
8. Automatically generates a new word to restart the game

Limitations:
1. The random word and the incorrect guesses are displayed in an array, which leaves commas in between the letters. It's not the cleanest presentation and could be confusing
2. The "hangman" image has some minor transparency issues with the snowflakes
3. The Javascript is not the DRYest thing on the planet....
4. It's not immediately clear that the game has restarted. The user has to press another key to prompt the display to update
5. I'm a little disappointed I didn't have the time to make Pusheen transform into a unicorn when the user wins!