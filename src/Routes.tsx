import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Layout from './components/Layout'

import Books from './pages/Books'

function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes
