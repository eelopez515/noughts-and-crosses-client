'use strict'
const gameUi = require('./game-ui')
const gameApi = require('./game-api')
const getFormFields = require('./../../lib/get-form-fields')
const store = require('./store')

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

let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]


const boxElements = Array.from(document.querySelectorAll('.box'))
const board = document.getElementsByClassName('.container')

const onClick = function (event) {
  event.preventDefault()
const index = boxElements.findIndex(function (box) {
    return box === event.target
})
  boxElements[index] = currentChoice
  gameBoard.splice(index, 1, currentChoice)
  if (currentChoice === 'X') {
    currentChoice = 'O'
  } else {
    currentChoice = 'X'
  }
  console.log(gameBoard)
}

// const winner = () => {
//   if(possibleWins === gameProgress) {
//     $('#game-message').text(currentChoice, 'Wins')
//   } else {
//     $('#game-message').text('Its a Draw, Play Again.')
//   }
// }

// const winner = () => {
//   for (let i = 0; i < possibleWins.length; i++) {
//     if (possibleWins[i] === gameProgress) {
//       $('#game-message').text(currentChoice, 'Wins')
//     } else {
//       $('#game-message').text('Its a Draw, Play Again.')
//     }
//   }
// }

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
