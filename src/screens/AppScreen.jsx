import React from 'react'
import { createJunction } from 'junctions'
import { Link } from 'react-junctions'
import { TopicsScreen, junction as TopicsScreen_junction } from './TopicsScreen'
import { Home, About, Topic } from '../pages'

const junction = createJunction({
  about: {},
  topics: { next: TopicsScreen_junction }
})

function AppScreen ({ route, locate }) {
  let content
  switch (route && route.key) {
    case 'about':
      content = <About />
      break

    case 'topics':
      content = <TopicsScreen route={route.next} locate={route.locate} />
      break

    default:
      content = <Home />
  }

  return (
    <div>
      <nav>
        <Link to={locate()}>Home</Link>|
        <Link to={locate(junction.createRoute('about'))}>About</Link>|
        <Link to={locate(junction.createRoute('topics'))}>Topics</Link>
      </nav>
      {content}
    </div>
  )
}

export {
  AppScreen,
  junction
}