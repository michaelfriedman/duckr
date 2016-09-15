import ReactDOM from 'react-dom'
import routes from 'config/routes'
import { createStore } from 'redux'
import users from 'redux/modules/users'
import Raven from 'raven-js'

const store = createStore(users)
console.log(store)
console.log(store.getState())

const sentryKey = '5f26c9d7813f49309839a6850bc93cca'
const sentryApp = '98798'
const sentryURL = 'https://' + sentryKey + '@app.getSentry.com/' + sentryApp

// const _APP_INFO = {
//   name: 'duckr',
//   branch: 'master',
//   version: '1.0'
// }

Raven.config(sentryURL).install()

ReactDOM.render(routes, document.getElementById('app'))
