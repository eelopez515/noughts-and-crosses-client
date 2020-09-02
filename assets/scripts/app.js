'use strict'

const authEvents = require('./auth/events')
const gameLogic = require('./game_logic')


$(() => {
  $('.container').hide()
  $('#score').hide()
  $('#play-again-button').hide()
  $('#sign-out-button').hide()
  $('#save-game').hide()
  // Authentication Events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // Game Events
  $('#start-game-button').on('click', gameLogic.onStartGame)
  $('#game-history').on('click', gameLogic.onGameHistory)
  $('#save-game').on('click', gameLogic.onSaveGame)
  $('#play-again-button').on('click', gameLogic.onPlayAgain)
  $('.box').one('click', gameLogic.onClick)
  // $('.box').on('mouseover', gameLogic.onMouseOver)
})
