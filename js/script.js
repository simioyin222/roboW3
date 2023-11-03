//ui logic
document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("number");
  const rapButton = document.getElementById("rapButton");
  const resultsList = document.getElementById("results");

  function updateResults() {
    const userInput = numberInput.value;
    const lyrics = generateRapLyrics(userInput);

    resultsList.innerHTML = "";

    lyrics.forEach(function (lyric) {
      const listItem = document.createElement("li");
      listItem.textContent = lyric;
      resultsList.appendChild(listItem);
    });
  }

  rapButton.addEventListener("click", updateResults);
});

//business logic
function generateRapLyrics(userInput) {
  const processedInput = handleNonNumericInput(userInput);
  if (typeof processedInput === "string") {
    return [processedInput];
  }

function replaceWithBeep(numberList) {
  return numberList.map(function (number) {
    return number.toString().includes("1") ? "Beep!" : number;
  });
}

function replaceWithBoop(numberList) {
  return numberList.map(function (number) {
    return number.toString().includes("2") ? "Boop!" : number;
  });
}

function replaceWithDJRobo(numberList) {
  return numberList.map(function (number) {
    return number.toString().includes("3") ? "DJ Robo on the beat!!" : number;
  });
}

function handleNonNumericInput(input) {
  if (isNaN(input) || input === "") {
    return "Error: Please enter a valid number.";
  }
  return parseInt(input);
}

function handleNegativeNumbers(userInput) {
  var absoluteInput = Math.abs(userInput);
  return generateRapLyrics(absoluteInput);
}

function handleZeroInput() {
  return [0];
}

function generateRapLyrics(userInput) {
  var processedNumbers = generateNumberList(handleNonNumericInput(userInput));
  processedNumbers = replaceWithBeep(processedNumbers);
  processedNumbers = replaceWithBoop(processedNumbers);
  processedNumbers = replaceWithDJRobo(processedNumbers);
  if (userInput < 0) {
    processedNumbers = handleNegativeNumbers(userInput);
  } else if (userInput === 0) {
    processedNumbers = handleZeroInput();
  }
  return processedNumbers;
}