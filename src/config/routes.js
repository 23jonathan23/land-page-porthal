import React from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Publication from '../pages/Publication/Publication'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/publication' component={Publication} />
      <Redirect ref='*' to='/' />
    </Switch>
  </BrowserRouter>
)
