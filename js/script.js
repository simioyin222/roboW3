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

  let numberList = [];
  for (let i = 0; i <= processedInput; i++) {
    let numberString = i.toString();
    if (numberString.includes("3")) {
      numberList.push("DJ Robo on the beat!!");
    } else if (numberString.includes("2")) {
      numberList.push("Boop!");
    } else if (numberString.includes("1")) {
      numberList.push("Beep!");
    } else {
      numberList.push(i);
    }
  }
  return numberList;
}

function handleNonNumericInput(input) {
  if (isNaN(input) || input === "") {
    return "Error: Please enter a valid number.";
  }
  return parseInt(input);
}