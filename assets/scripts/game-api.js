'use strict'

const config = require('./config')
const store = require('./store')

const startGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    header: {
      Authorization: 'Bearer ' + store.game
    },
    data: data
  })
}

const gameHistory = function (data) {
  return $.ajax({
    url: config.Url + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    // header: {
    //   Authorization: 'Bearer ' + store.game
    // },
    data: data
  })
}

module.exports = {
  startGame: startGame,
  gameHistory: gameHistory
}
