import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory as createHistory } from 'history'
import Navigation from './Navigation'

const navigation = require('./navigation.json')

  // <Navigation history={} tree={navigation} />,
ReactDOM.render(
  <Navigation history={createHistory()} />,
  document.getElementById('root')
)
