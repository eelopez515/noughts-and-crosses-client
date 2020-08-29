'use strict'

const store = require('./store')

const onStartGameSuccess = function (response) {
  $('#message').text('Good Luck, Have Fun ' + store.user.email)
}

const onStartGameFailure = function () {
  $('#message').text('Unable to Start Game, Try Again.')
}

module.exports = {
  onStartGameSuccess: onStartGameSuccess,
  onStartGameFailure: onStartGameFailure
}
