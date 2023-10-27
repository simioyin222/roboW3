## Tests

### Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace numbers containing 1 with 'Beep!'"
Code: beepBoop([0, 1, 12, 21, 31]);
Expected Output: [0, 'Beep!', 'Beep!', 'Beep!', 'Beep!']

Test: "It should replace numbers containing 2 with 'Boop!'"
Code: beepBoop([0, 2, 22, 123, 32]);
Expected Output: [0, 'Boop!', 'Boop!', 123, 'Boop!']

