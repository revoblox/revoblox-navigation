import React from 'react'
import { createJunction } from 'junctions'
import { Link } from 'react-junctions'
import { Component as Topic } from './index'

const junction = createJunction({
  topics: {
    path: '/:id',
    paramTypes: {
      id: { required: true },
    }
  }
})

const root = 'topics'

const config = [
  {
    root,
    options: { id: 'rendering' },
    linkcontent: 'Rendering with React!'
  },
  {
    root,
    options: { id: 'components' },
    linkcontent: 'Components'
  },
  {
    root,
    options: { id: 'props-v-state' },
    linkcontent: 'Props v. State'
  }
]

const TopicsScreen = ({ route, locate }) => {
  console.log('route')
  console.log(route)
  return (
    <div>
      <h2>Topics</h2>
      <nav>
        {config
          .map(({ root, options, linkcontent }, id) =>
            <Link
              key={id}
              to={locate(junction.createRoute(root, options))}
            >{ linkcontent }</Link>
          )
        }
      </nav>

      {
        route
          ? <Topic id={route.params.id} />
          : <h3>Please select a topic</h3>
      }
    </div>
  )
}

export {
  TopicsScreen,
  junction
}