'use strict'

const gameStore = require('./game-store')
const store = require('./store')
const gameLogic = require('./game_logic')

const onStartGameSuccess = function (response) {
  gameStore.game = response.game
  $('#message').text('Good Luck, Have Fun ' + store.user.email)
  $('#game-message').text('X Goes First')
  $('.container').show()
  $('#play-again-button').show()
  $('#sign-out-button').show()
  $('#change-password-form').hide()
  $('#save-game').show()
}
const onStartGameFailure = function () {
  $('#game-message').text('Unable to Start Game, Try Again.')
}

const onGameHistorySuccess = function (data) {
  $('#game-message').text('Here is your game history ' + store.user.email)
  $('#game-message').text('You have played ' + data.games.length + ' game(s) ' + store.user.email)
}

const onGameHistoryFailure = function () {
  $('#game-message').text('Failed to load game history, try again.')
}
const onSaveGameSuccess = function (response) {
  console.log(response)
  console.log(store)
  $('#game-message').text('You have successfully saved your game ' + store.user.email)
}
const onSaveGameFailure = function () {
  $('#game-message').text('Unable to Save Game, Try Again.')
}
// const onPlayAgainSuccess = function (response) {
//   $('#play-again-message').text('New Game Started ' + store.user.email)
//   $('#message').hide()
//   $('.box').html('')
//   onStartGame()
// }
// const onPlayAgainFailure = function () {
//   $('#game-message').text('Unable to Start A New Game, Try Again.')
//
// }
const onWinningGame = function (currentChoice) {
  $('#message').hide()
}

module.exports = {
  onStartGameSuccess: onStartGameSuccess,
  onStartGameFailure: onStartGameFailure,
  onGameHistorySuccess: onGameHistorySuccess,
  onGameHistoryFailure: onGameHistoryFailure,
  onSaveGameSuccess: onSaveGameSuccess,
  onSaveGameFailure: onSaveGameFailure,
  // onPlayAgainSuccess: onPlayAgainSuccess,
  // onPlayAgainFailure: onPlayAgainFailure,
  onWinningGame: onWinningGame
}
