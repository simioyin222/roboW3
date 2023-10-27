// Business Logic
function generateNumberList(userInput) {
  var numberList = []
  for (var i = 0; i <= userInput; i++) {
    numberList.push(i)
  }
  return numberList
}

function replaceWithBeep(numberList) {
  return numberList.map(function (number) {
    return number.toString().includes("1") ? "Beep!" : number
  })
}

function replaceWithBoop(numberList) {
  return numberList.map(function (number) {
    return number.toString().includes("2") ? "Boop!" : number
  })
}

function replaceWithDJRobo(numberList) {
  return numberList.map(function (number) {
    return number.toString().includes("3") ? "DJ Robo on the beat!!" : number
  })
}

function handleNonNumericInput(input) {
  if (isNaN(input) || input === "") {
    return "Error: Please enter a valid number."
  }
  return parseInt(input)
}

function handleNegativeNumbers(userInput) {
  var absoluteInput = Math.abs(userInput)
  return generateRapLyrics(absoluteInput)
}

function handleZeroInput() {
  return [0]
}

function generateRapLyrics(userInput) {
  var processedNumbers = generateNumberList(handleNonNumericInput(userInput))
  processedNumbers = replaceWithBeep(processedNumbers)
  processedNumbers = replaceWithBoop(processedNumbers)
  processedNumbers = replaceWithDJRobo(processedNumbers)
  if (userInput < 0) {
    processedNumbers = handleNegativeNumbers(userInput)
  } else if (userInput === 0) {
    processedNumbers = handleZeroInput()
  }
  return processedNumbers
}

//ui logic

document.addEventListener("DOMContentLoaded", function () {
  var numberInput = document.getElementById("number")
  var rapButton = document.getElementById("rapButton")
  var resultsList = document.getElementById("results")

  function updateResults() {
    var userInput = numberInput.value

    var rapLyrics = generateRapLyrics(userInput)

    resultsList.innerHTML = ""

    rapLyrics.forEach(function (lyric) {
      var listItem = document.createElement("li")
      listItem.textContent = lyric
      resultsList.appendChild(listItem)
    })
  }

  rapButton.addEventListener("click", updateResults)
})
