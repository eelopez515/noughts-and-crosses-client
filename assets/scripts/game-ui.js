'use strict'

const gameStore = require('./game-store')
const store = require('./store')
const gameLogic = require('./game_logic')

const onStartGameSuccess = function (response) {
  gameStore.game = response.game
  console.log('response is', response)
  console.log('gamestore is', gameStore.game._id)
  $('#message').text('Good Luck, Have Fun ' + store.user.email)
  $('#game-message').text('X Goes First')
  $('.container').show()
  $('#score').show()
}

const onStartGameFailure = function () {
  $('#game-message').text('Unable to Start Game, Try Again.')
}

const onGameHistorySuccess = function (response) {
  $('#game-message').text('Here is your game history ' + store.user.email)
}

const onGameHistoryFailure = function () {
  $('#game-message').text('Failed to load game history, try again.')
}
const onSaveGameSuccess = function (response) {
  console.log(response)
  console.log(store)
  $('#game-message').text('You have successfully save your game ' + store.user.email)
}
const onSaveGameFailure = function () {
  $('#game-message').text('Unable to Save Game, Try Again.')
}

module.exports = {
  onStartGameSuccess: onStartGameSuccess,
  onStartGameFailure: onStartGameFailure,
  onGameHistorySuccess: onGameHistorySuccess,
  onGameHistoryFailure: onGameHistoryFailure,
  onSaveGameSuccess: onSaveGameSuccess,
  onSaveGameFailure: onSaveGameFailure
}
