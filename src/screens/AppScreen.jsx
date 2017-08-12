import React from 'react'
import { createJunction } from 'junctions'
import { Link } from 'react-junctions'
import Tree from '../Tree'
import { Component as Home } from '../modules/home'
import { junction as about, Component as About } from '../modules/about'
import { junction as topics, Component as Topics } from '../modules/topics'
// import { TopicsScreen } from '../modules/topics/TopicsScreen'
import { extractLabelValues } from '../utils'

const extendSub = (o) => {  return Object.keys(o).map((k) => o[k]).reduce((prev, curr, index) => curr) }

const sub = extendSub(topics)
console.log(sub)
const _topics = { topics: { next: createJunction(sub) } }
console.log(_topics.topics.next)
const tree = Object.assign({ home: {} }, topics, about)
const merged = Object.assign({ home: {} }, _topics, about)
const junction = createJunction(merged)

function AppScreen ({ route, locate }) {
  let content
  switch (route && route.key) {
    case 'about':
      content = <About />
      break

    case 'topics':
      // content = <TopicsScreen route={route.next} locate={route.locate} />
      content = <Topics />
      break

    default:
      content = <Home />
  }

  return (
    <div>
      <nav>
        <Tree
          tree={extractLabelValues(tree)}
          locate={locate}
          route={route}
          junction={junction}
        />
      </nav>
      {content}
    </div>
  )
}

export {
  AppScreen,
  junction
}