## Tests

### Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: generateNumberList(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace numbers containing 1 with 'Beep!'"
Code: replaceWithBeep([0, 1, 12, 21, 31]);
Expected Output: [0, 'Beep!', 'Beep!', 'Beep!', 'Beep!']
