import React from 'react'
import { createJunction } from 'junctions'
import { Link } from 'react-junctions'
import { Topics as Topic } from '../pages'

const junction = createJunction({
  details: {
    path: '/:id',
    paramTypes: {
      id: { required: true },
    }
  },
})

const config = [
  {
    root: 'details',
    options: { id: 'rendering' },
    linkcontent: 'Rendering with React!'
  },
  {
    root: 'details',
    options: { id: 'components' },
    linkcontent: 'Components'
  },
  {
    root: 'details',
    options: { id: 'props-v-state' },
    linkcontent: 'Props v. State'
  }
]

const TopicsScreen = ({ route, locate }) => {
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