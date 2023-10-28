# DJ Robo

## Author

Similoluwa Oyinkolade

## Description

DJ Robo is a web application that generates rap lyrics based on user input. It takes a number from the user and returns a list of values from 0 to the user's inputted number with specific substitutions made within the returned list.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup/Installation Requirements

1. Clone the repository to your local machine using `git clone https://github.com/your-username/dj-robo.git`
2. Navigate to the project directory using `cd dj-robo`
3. Open the `index.html` file in your web browser to use the application.

## How to Use

1. Enter a number in the input field.
2. Click the "Rap Lyrics" button to generate rap lyrics based on the inputted number.
3. The generated rap lyrics will be displayed below the input field.

## Known Bugs

There are currently no known bugs.

## License Information

MIT License

Copyright (c) 2023 Similoluwa Oyinkolade

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

## Tests

Describe: generateNumberList()
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: generateNumberList(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Describe: replaceWithBeep()
Test: "It should replace numbers containing 1 with 'Beep!'"
Code: replaceWithBeep([0, 1, 12, 21, 31]);
Expected Output: [0, 'Beep!', 'Beep!', 'Beep!', 'Beep!']

Describe: replaceWithBoop()
Test: "It should replace numbers containing 2 with 'Boop!'"
Code: replaceWithBoop([0, 2, 22, 123, 32]);
Expected Output: [0, 'Boop!', 'Boop!', 123, 'Boop!']

Describe: replaceWithDJRobo()
Test: "It should replace numbers containing 3 with 'DJ Robo on the beat!!'"
Code: replaceWithDJRobo([0, 3, 35, 123, 345]);
Expected Output: [0, 'DJ Robo on the beat!!', 'DJ Robo on the beat!!', 123, 'DJ Robo on the beat!!']

Describe: handleNonNumericInput()
Test: "It should return an error message for non-numeric input"
Code: handleNonNumericInput("hello");
Expected Output: "Error: Please enter a valid number."

Describe: handleNegativeNumbers()
Test: "It should handle negative numbers and generate the correct rap lyrics list"
Code: generateRapLyrics(-3);
Expected Output: [0, 'Beep!', 'Boop!', 'DJ Robo on the beat!!']

Describe: handleZeroInput()
Test: "It should handle input of zero and return an array containing only zero"
Code: generateRapLyrics(0);
Expected Output: [0, ]

Describe: generateRapLyrics()
Test: "It should generate the correct rap lyrics list for the user's input"
Code: generateRapLyrics(5);
Expected Output: [0, 'Beep!', 'Boop!', 'DJ Robo on the beat!!', 'Boop!']
