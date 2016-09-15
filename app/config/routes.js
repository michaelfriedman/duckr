import React from 'react'
import { Router, hashHistory, IndexRoute, Route } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <Route path='auth' component={AuthenticateContainer} />
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
)

export default routes
