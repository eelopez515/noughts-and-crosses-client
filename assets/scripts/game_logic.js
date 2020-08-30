'use strict'
const gameUi = require('./game-ui')
const gameApi = require('./game-api')
const getFormFields = require('./../../lib/get-form-fields')

// GAME FUNCTIONALITY
// let xChoice = 'X'
// let oChoice = 'O'
let currentChoice = 'X'
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
let gameProgress = []

const boxElements = Array.from(document.querySelectorAll('.box'))
const board = document.getElementsByClassName('.container')

const onClick = function (event) {
  event.preventDefault()
  const boxEvent = function (box) {
    return box === event.target
  }
  let index = boxElements.findIndex(boxEvent)
  boxElements[index] = currentChoice
  console.log(boxElements)
  if (currentChoice === 'X') {
    currentChoice = 'O'
  } else {
    currentChoice = 'X'
  }
}


// GAME API
const onStartGame = function (event) {
  event.preventDefault()
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

  gameApi.gameHistory()
    .then(gameUi.onGameHistorySuccess)
    .catch(gameUi.onGameHistoryFailure)
}
const onPlayAgain = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi.playAgain()
    .then(gameUi.onPlayAgainSuccess)
    .catch(gameUi.onPlayAgainFailure)
}

module.exports = {
  onClick: onClick,
  onStartGame: onStartGame,
  onGameHistory: onGameHistory
}
