import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from 'config/routes'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import users from 'redux/modules/users'
import { Provider } from 'react-redux'
import { checkIfAuthed } from 'helpers/auth'
import Raven from 'raven-js'

const store = createStore(users, applyMiddleware(thunk))

function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed === true) {
      replace('/feed')
    }
  } else {
    if (isAuthed !== true) {
      replace('/auth')
    }
  }
}

const sentryKey = '5f26c9d7813f49309839a6850bc93cca'
const sentryApp = '98798'
const sentryURL = 'https://' + sentryKey + '@app.getSentry.com/' + sentryApp

// const _APP_INFO = {
//   name: 'duckr',
//   branch: 'master',
//   version: '1.0'
// }

Raven.config(sentryURL).install()

ReactDOM.render(
  <Provider store={store}>
  {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app')
)
