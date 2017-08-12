import React from 'react'
import { createJunction } from 'junctions'
import { Link } from 'react-junctions'
import { green, brown } from './colors'

const Tree = ({junction, tree, route, locate}) => {
  return <ul>
    { tree
      .map(({label, children}, i) => {
      return (
        <li style={{backgroundColor: green, listStyle: 'url'}} key={i}>
          { junction && locate && label && (label !== 'home') &&
          <Link to={locate(junction.createRoute(label))}>{label}</Link>
          }
          { (!junction || label === "home") && locate &&
          <Link to={locate()}>{label}</Link>
          }
        { children && route && (label === route.key) &&
            <Tree
              tree={children}
              junction={route.next}
              locate={route.locate}
            />
        }
        </li>
      )
      }
    )}
  </ul>
}

export default Tree