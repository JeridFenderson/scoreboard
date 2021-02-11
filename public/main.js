let team1Points = 0
let team2Points = 0

function team1NameChange() {
  document.querySelector('#team1Name').textContent = document.querySelector(
    '#team1NewName'
  ).value
}
function team2NameChange() {
  document.querySelector('#team2Name').textContent = document.querySelector(
    '#team2NewName'
  ).value
}

function addPoint1() {
  if (team1Points >= 21) {
    window.alert(`${document.querySelector('#team1Name').textContent} won!`)
    return
  }
  team1Points++
  document.querySelector('#team1Points').textContent = team1Points
}
function addPoint2() {
  if (team2Points >= 21) {
    window.alert(`${document.querySelector('#team2Name').textContent} won!`)
    return
  }
  team2Points++
  document.querySelector('#team2Points').textContent = team2Points
}

function subtractPoint1() {
  if (team1Points <= 0) {
    return
  }
  team1Points--
  document.querySelector('#team1Points').textContent = team1Points
}
function subtractPoint2() {
  if (team2Points <= 0) {
    return
  }
  team2Points--
  document.querySelector('#team2Points').textContent = team2Points
}

function resetScore() {
  team1Points = 0
  team2Points = 0
  document.querySelector('#team1Points').textContent = team1Points
  document.querySelector('#team2Points').textContent = team2Points
}

function main() {
  document
    .querySelector('#team1NewName')
    .addEventListener('keyup', team1NameChange)
  document
    .querySelector('#team2NewName')
    .addEventListener('keyup', team2NameChange)
  document.querySelector('#team1Add').addEventListener('click', addPoint1)
  document.querySelector('#team2Add').addEventListener('click', addPoint2)
  document
    .querySelector('#team1Subtract')
    .addEventListener('click', subtractPoint1)
  document
    .querySelector('#team2Subtract')
    .addEventListener('click', subtractPoint2)
  document.querySelector('#resetScore').addEventListener('click', resetScore)
}

document.addEventListener('DOMContentLoaded', main)
