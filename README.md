## Tests

### Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: generateNumberList(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace numbers containing 1 with 'Beep!'"
Code: replaceWithBeep([0, 1, 12, 21, 31]);
Expected Output: [0, 'Beep!', 'Beep!', 'Beep!', 'Beep!']

Test: "It should replace numbers containing 2 with 'Boop!'"
Code: replaceWithBoop([0, 2, 22, 123, 32]);
Expected Output: [0, 'Boop!', 'Boop!', 123, 'Boop!']

Test: "It should replace numbers containing 3 with 'DJ Robo on the beat!!'"
Code: replaceWithDJRobo([0, 3, 35, 123, 345]);
Expected Output: [0, 'DJ Robo on the beat!!', 'DJ Robo on the beat!!', 123, 'DJ Robo on the beat!!']

Test: "It should return an error message for non-numeric input"
Code: handleNonNumericInput("hello");
Expected Output: "Error: Please enter a valid number."

Test: "It should handle negative numbers and generate the correct rap lyrics list"
Code: generateRapLyrics(-3);
Expected Output: [0, 'Beep!', 'Boop!', 'DJ Robo on the beat!!']

Test: "It should handle input of zero and return an array containing only zero"
Code: generateRapLyrics(0);
Expected Output: [0, ]

Test: "It should generate the correct rap lyrics list for the user's input"
Code: generateRapLyrics(5);
Expected Output: [0, 'Beep!', 'Boop!', 'DJ Robo on the beat!!', 'Boop!']
