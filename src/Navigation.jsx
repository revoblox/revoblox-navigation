import React, { Component } from 'react'
import { extractLabelValues } from './utils'

const colors = {
  blue: '#0c87e2',
  brown: '#7a4f26',
  green: '#4d832d'
}

const Tree = ({tree}) => {
  return <ul>
    { tree
      .map(({label, value, children}, i) =>
      (!children)
        ? <li style={{backgroundColor: colors.green, listStyle: 'url'}} key={i}>
            <a href={value}>{label}</a>
          </li>
        : <li style={{backgroundColor: colors.brown, listStyle: 'url'}} key={i}>
            {label}
            <Tree tree={children} />
          </li>
    )}
  </ul>
}

export default class Navigation extends Component {
  render() {
    const { tree } = this.props 
    console.log('tree')
    console.log(tree)
    return (
      <div style={{backgroundColor: colors.blue, fontFamily: 'arial', width: '18em' }}>
        <Tree tree={extractLabelValues(tree)} />
      </div>
    )
  }
}