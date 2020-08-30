'use strict'

const store = require('./store')

const onStartGameSuccess = function (response) {
  store.game = response.game
  console.log(store.game)
  $('#message').text('Good Luck, Have Fun ' + store.user.email)
  $('.container').show()
  $('#score').show()
}

const onStartGameFailure = function () {
  $('#message').text('Unable to Start Game, Try Again.')
}

const onGameHistorySuccess = function (response) {
  $('#message').text('Here is your game history ' + store.user.email)
}

const onGameHistoryFailure = function () {
  $('#message').text('Failed to load game history, try again.')
}

module.exports = {
  onStartGameSuccess: onStartGameSuccess,
  onStartGameFailure: onStartGameFailure,
  onGameHistorySuccess: onGameHistorySuccess,
  onGameHistoryFailure: onGameHistoryFailure
}
