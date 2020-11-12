import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { CustomLayout, Main, Episodes } from 'containers'

const Routes = () => (
  <Router>
    <Switch>
      <CustomLayout>
        <Route exact path='/' render={() => <Redirect to='/main' />} />
        <Route exact path='/main' component={Main} />
        <Route path='/main/:id' component={Episodes} />
      </CustomLayout>
    </Switch>
  </Router>
)

export default Routes
