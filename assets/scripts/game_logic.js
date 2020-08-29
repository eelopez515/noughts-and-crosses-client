'use strict'
const gameUi = require('./game-ui')
const gameApi = require('./game-api')
const getFormFields = require('./../../lib/get-form-fields')

let xChoice = 'X'
let oChoice = 'O'
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
const gameProgress = []

const boxElements = document.querySelectorAll('.box')
const board = document.getElementsByClassName('.container')

let oIsCurrent

// function switchChoice = () => {
//   oIsCurrent === !oIsCurrent
// }

const onClick = function (event) {
  event.preventDefault()
  const box = event.target
  boxElements.forEach(box => {
    box.addEventListener(event, onClick)
  })
  console.log('click')
}

const onStartGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi.startGame(data)
    .then(gameUi.onStartGameSuccess)
    .catch(gameUi.onStartGameFailure)
}
// boxElements.forEach(box => {
//   gameProgress.push(xChoice)
// })

module.exports = {
  onClick: onClick,
  onStartGame: onStartGame
}
