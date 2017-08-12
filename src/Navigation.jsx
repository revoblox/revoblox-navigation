import React, { Component } from 'react'
import { Router } from 'react-junctions'

import { blue } from './colors'
import { AppScreen, AppScreen_junction } from './screens'

export default function Navigation({ history, tree }) {
  // console.log('tree')
  // console.log(tree)

  return (
    <div>
      <Router
        history={history}
        junction={AppScreen_junction}
        render={AppScreen}
      />
    </div>
  )
}
