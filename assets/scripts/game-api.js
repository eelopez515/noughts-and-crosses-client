'use strict'

const config = require('./config')
const store = require('./store')

const startGame = function (data) {
  return $.ajax({
    url: config.apiURL + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  startGame: startGame
}
