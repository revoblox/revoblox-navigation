import React from 'react'
import { Link } from 'react-junctions'
import { green, brown } from './colors'

const Tree = ({tree}) => {
  return <ul>
    { tree
      .map(({label, value, children}, i) =>
      (!children)
        ? <li style={{backgroundColor: green, listStyle: 'url'}} key={i}>
            <Link to={{ pathname: value }}>{label}</Link>
          </li>
        : <li style={{backgroundColor: brown, listStyle: 'url'}} key={i}>
            {label}
            <Tree tree={children} />
          </li>
    )}
  </ul>
}

export default Tree