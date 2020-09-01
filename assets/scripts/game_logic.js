'use strict'
const gameUi = require('./game-ui')
const gameApi = require('./game-api')
const getFormFields = require('./../../lib/get-form-fields')
const store = require('./store')

// GAME FUNCTIONALITY
const boxElements = Array.from(document.querySelectorAll('.box'))
const board = document.getElementsByClassName('.row')
let xChoice = 'x'
let oChoice = 'o'
let currentChoice = 'x'
const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

// beginGame()

const onClick = function (event) {
  event.preventDefault()
  const box = event.target


  // const xOrO = currentChoice ? xChoice : oChoice
  const boxEventIndex = boxElements.findIndex(function (box) {
    return box === event.target
})
document.getElementById(boxEventIndex).classList.add('box', currentChoice)
document.getElementById('board').classList.add('row', currentChoice)

  boxElements[boxEventIndex] = currentChoice
  gameBoard.splice(boxEventIndex, 1, currentChoice)




switchChoice()
console.log(gameBoard)
console.log(currentChoice)
}
// }

// Functions
function switchChoice () {
  if (currentChoice === 'x') {
    currentChoice = 'o'
  } else {
    currentChoice = 'x'
  }
}



// GAME API
const onStartGame = function (event) {
  event.preventDefault()
  const send = document.getElementById('board')
  send.classList.add('row', currentChoice)
  console.log(send)
  const form = event.target
  const data = getFormFields(form)
  gameApi.startGame(data)
    .then(gameUi.onStartGameSuccess)
    .catch(gameUi.onStartGameFailure)
}

const onGameHistory = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi.gameHistory(data)
    .then(gameUi.onGameHistorySuccess)
    .catch(gameUi.onGameHistoryFailure)
}
const onSaveGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi.saveGame(data)
    .then(gameUi.onSaveGameSuccess)
    .catch(gameUi.onSaveGameFailure)
}

module.exports = {
  onClick: onClick,
  onStartGame: onStartGame,
  onGameHistory: onGameHistory,
  onSaveGame: onSaveGame,
  // gameProgress: gameProgress
}
