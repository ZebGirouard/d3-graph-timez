import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavItem,
} from 'reactstrap'

import './App.css'
import {
  BarChart,
  Home,
  Temperatures,
} from './screens'

const App = () => {
  const [ user, setUser ] = useState({})
  // cuz my linter is intense
  console.log(user, setUser)
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Nav className="flex-row">
            <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/temperatures">Temperatures</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/bar-chart">Bar Chart</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <div>
          <Switch>
            <Route path="/bar-chart">
              <BarChart />
            </Route>
            <Route path="/temperatures">
              <Temperatures />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
