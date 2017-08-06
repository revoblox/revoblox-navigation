import React, { Component } from 'react'
import { createJunction } from 'junctions'
import { Link, Router } from 'react-junctions'

import { extractLabelValues } from './utils'
import { blue } from './colors'
import Tree from './Tree'
import { TopicsScreen, AppScreen, AppScreen_junction } from './screens'

export default function Navigation({ history, tree }) {
  console.log('tree')
  console.log(tree)

  return (
    <div>
      <nav style={{backgroundColor: blue, fontFamily: 'arial', width: '18em' }}>
        <Tree tree={extractLabelValues(tree)} />
      </nav>
      <Router
        history={history}
        junction={AppScreen_junction}
        render={AppScreen}
      />
    </div>
  )
}