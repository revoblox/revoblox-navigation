import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'

const navigation = require('./navigation.json')

ReactDOM.render(
  <Navigation tree={navigation} />,
  document.getElementById('root')
)
