import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory as createHistory } from 'history'
import Navigation from './Navigation'
import navigation from './junctions-nav'

// const navigation = require('./navigation.json')

ReactDOM.render(
  <Navigation tree={navigation} history={createHistory()} />,
  document.getElementById('root')
)
