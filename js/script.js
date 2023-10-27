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
  return numberList.map(function(number) {
    return number.toString().includes('2') ? 'Boop!' : number;
  });
}

function replaceWithDJRobo(numberList) {
  return numberList.map(function(number) {
    return number.toString().includes('3') ? 'DJ Robo on the beat!!' : number;
  });
}

