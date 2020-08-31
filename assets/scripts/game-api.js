'use strict'

const gameStore = require('./game-store')
const config = require('./config')
const store = require('./store')

const startGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const gameHistory = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
      id: 'Bearer ' + store.game
    },

    data: data
  })
}

const saveGame = function (index, over, value) {
  console.log('store game is ', gameStore.game)
  console.log(index)
  return $.ajax({
    url: config.apiUrl + '/games:' + gameStore.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

module.exports = {
  startGame: startGame,
  gameHistory: gameHistory,
  saveGame: saveGame
}
