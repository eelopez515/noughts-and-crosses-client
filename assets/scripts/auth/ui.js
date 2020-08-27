'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('You have successfully signed up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed, please try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  console.log(store.user)
  $('#message').text('You have successfully signed in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed, please try again')
}
const onChangePasswordSuccess = function (response) {
  $('#message').text('You have successfully changed your password ' + response.user.email)
  $('#change-password-form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Failed to change password, try again please.')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure

}
