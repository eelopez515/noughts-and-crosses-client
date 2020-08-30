'use strict'

const authEvents = require('./auth/events')
const gameLogic = require('./game_logic')

$(() => {
  // $('.container').hide()
  // $('#score').hide()
  // Authentication Events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  // Game Events
  $('#start-game-button').on('click', gameLogic.onStartGame)
  $('#game-history').on('click', gameLogic.onGameHistory)
  $('#play-again-button').on('click', gameLogic.onPlayAgain)
  $('.box').one('click', gameLogic.onClick)

})
