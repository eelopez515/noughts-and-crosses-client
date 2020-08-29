'use strict'

const authEvents = require('./auth/events')
const gameLogic = require('./game_logic')

$(() => {
  // Authentication Events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  // Game Events
  $('.box').one('click', gameLogic.onClick)
  $('#startGameButton').on('click', gameLogic.onStartGame)
})
